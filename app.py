from flask import Flask, render_template, request, redirect, url_for, flash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_bcrypt import Bcrypt, check_password_hash
from flask_mail import Mail
from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy

from config.config import Config
from routes.routes import routes_setup

#app
app = Flask(__name__)
app.config.from_object(Config)
bcrypt = Bcrypt(app)
db = SQLAlchemy(app)
mysql=MySQL(app)
mail = Mail(app)
routes_setup(app)

# Configurar Flask-Login
login_manager = LoginManager(app)
login_manager.login_view = 'login'
login_manager.login_message = "Debes iniciar sesión para acceder a este contenido."

#actualizar el modelo user
class User(UserMixin, db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), unique=True, nullable=False)
    apellido = db.Column(db.String(100), unique=True, nullable=False)
    correo = db.Column(db.String(100), unique=True, nullable=False)
    telefono = db.Column(db.String(100), unique=True, nullable=False)
    pais = db.Column(db.String(100), unique=True, nullable=False)
    ciudad = db.Column(db.String(100), unique=True, nullable=False)
    direccion = db.Column(db.String(100), unique=True, nullable=False)
    usuario = db.Column(db.String(100), unique=True, nullable=False)
    contraseña = db.Column(db.String(100), nullable=False)

    def get_id(self):
        return str(self.id)

def load_user_from_db(user_id):
    try:
        #cargar usuario desde la base de datos
        cur = mysql.connection.cursor()
        cur.execute("SELECT *FROM usuarios WHERE id = %s", (user_id,))
        user_data = cur.fetchone()
        cur.close()

        if user_data:
            user = User()
            if isinstance(user_data, dict):
                user.id = user_data.get('id')
                user.nombre = user_data.get('nombre')
                user.correo = user_data.get('correo')
                user.telefono = user_data.get('telefono')
                user.pais = user_data.get('pais')
                user.ciudad = user_data.get('ciudad')
                user.direccion = user_data.get('direccion')
                user.usuario = user_data.get('usuario')
                user.contraseña = user_data.get('contraseña')
            elif isinstance(user_data, tuple):
                user.id = user_data[0]
                user.nombre = user_data[1]
                user.correo = user_data[3]
                user.telefono = user_data[4]
                user.pais= user_data[5]
                user.ciudad = user_data[6]
                user.direccion = user_data[7]
                user.usuario = user_data[8]
                user.contraseña = user_data[9]
            else:
                return None
            
            return user
    except Exception as e:
        print(f"Error al cargar el usuario: {e}") #Manejar la excepcion
    
    return None


@login_manager.user_loader
def load_user(user_id):
    return load_user_from_db(int(user_id))

#middleware
@app.before_request
def check_login():
    if current_user.is_authenticated and request.endpoint == 'login':
        return redirect(url_for('home'))
    

#login
@app.route('/login', methods=['GET', 'POST'])
def login():
    #verificar si el usuario se encuentra autenticado
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    
    cur = None  # inicializar cur a None

    if request.method == 'POST':
        user = request.form['user']
        password = request.form['password']
        remember = 'remember' in request.form

        try:
            #validar las credenciales del usuario
            cur = mysql.connection.cursor()
            cur.execute("SELECT * FROM usuarios WHERE usuario = %s", (user,))
            user_data = cur.fetchone()

            if user_data and check_password_hash(user_data['contraseña'], password):
                user = User()
                user.id = user_data['id']
                login_user(user, remember=remember)
                return redirect(url_for('home'))
            else:
                 flash('Datos incorrectos. Inténtalo de nuevo.', 'error')

        except Exception as e:
            print(f"Error al validar las credenciales: {e}")

        finally:
            if cur:  # verificar si cur está definido
                cur.close()  # cerrar la conexión a la DB si está definido
            
    return render_template('login.html')

@app.route('/registro', methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        #obtener los datos del formulario
        name = request.form['name']
        user = request.form['user']
        email = request.form['email']
        password = request.form['password']
        pass_confirm = request.form['pass_confirm']

        #validar si las contraeña no coinciden
        if password != pass_confirm:
            flash('Las contraseñas no coinciden.', 'error')
            return redirect(url_for('registro'))
        
        #verificar si el correo ya se encuentra registrado
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM usuarios WHERE correo = %s", (email,))
        existing_user = cur.fetchone()

        if existing_user:
            flash('Este correo ya se encuentra registrado, por favor inicie sesión.', 'error')
        else:
            #hash de la contraseña antes de almacenarla
            hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

            #realizar la conexion y la insercion en la base de datos
            cur. execute("INSERT INTO usuarios (nombre, usuario, correo, contraseña) VALUES (%s,%s,%s,%s)", (name, user, email, hashed_password))
            mysql.connection.commit()

            #loguear al usuario automaticamente despues del registro
            user = User()
            user.id = cur.lastrowid
            login_user(user)

            flash('Usuario registrado exitosamente.', 'success')
        
        cur.close()

        return redirect(url_for('registro'))

    return render_template('registro.html')
    
#Intercambio

    

@app.route('/logout')
def logout():
    # Obtener la URL actual antes de cerrar la sesión
    current_page = request.referrer
    
    # Realizar el cierre de sesión después del retraso
    logout_user()

    # Redirigir al usuario a la URL almacenada o a la página de inicio si no hay URL almacenada
    return redirect(current_page or url_for('login'))


if __name__ == "__main__":
    app.run(debug=True)
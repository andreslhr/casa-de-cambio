from flask import render_template
from flask_login import login_required
#rutas
def routes_setup(app):

    @app.route('/')
    def home():
        return render_template('index.html')
    
    @app.route('/conversor')
    def conversor():
        return render_template('conversor.html')
   
    
    @app.route('/quienes_somos')
    def quienes_somos():
        return render_template('quienes_somos.html')
     
    @app.route('/compra_y_venta_de_divisas')
    def compra_y_venta_de_divisas():
        return render_template('servicios/compra_y_venta_de_divisas.html')
    
    @app.route('/transferencias_internacionales')
    def transferencias_internacionales():
        return render_template('servicios/transferencias_internacionales.html')
    
    @app.route('/compra_y_venta_de_cheques_viajeros')
    def compra_y_venta_de_cheques_viajeros():
        return render_template('servicios/compra_y_venta_de_cheques_viajeros.html')
    
    
    @app.route('/envio_de_remesas')
    def envio_de_remesas():
        return render_template('servicios/envio_de_remesas.html')

    @app.route('/envio_de_dinero')
    def envio_de_dinero():
        return render_template('servicios/envio_de_dinero.html')


    @app.route('/reseñas')
    def reseñas():
        return render_template('reseñas.html')
    
    
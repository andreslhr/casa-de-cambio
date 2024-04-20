class Config:
    SECRET_KEY = 'papasfritas'
    SQLALCHEMY_DATABASE_URI = 'mysql://root@localhost/casa_de_cambios'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SESSION_COOCKIE_SECURE = True
    SESSION_COOCKIE_HTTPONLY = True

    #configuracion de flask mail


    #configuracion de la base de datos
    MYSQL_HOST = 'localhost'
    MYSQL_USER = "root"
    MYSQL_PASSWORD = ''
    MYSQL_DB = 'casa_de_cambios'
    MYSQL_CURSORCLASS = 'DictCursor'
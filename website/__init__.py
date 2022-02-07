# set up flask app in __init__ (which makes website a packkage)
# this makes it easy to start server by simply running main.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager

# define database
db = SQLAlchemy()
DB_NAME = "database.db"


def create_app():
    app = Flask(__name__)
    # secret key can be stored in package for testing
    # set location of database (f string works 3.6 and up)
    # stop deprecation warning
    # init database
    app.config['SECRET_KEY'] = 'hjshjhdjah kjshkjdhjs'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

    # importing views and auth from views and auth .py
    from .views import views
    from .auth import auth

    # registering blueprints routes from views and auth .py 
    # notice the prefix being '/' for the routes in auth
    # if the prefix was something like '/auth' for example,
    # and a routes prefix in auth.py was, for example, '/login'
    # the url to reach the login page would be 'http://127.0.0.1:5000/auth/login'
    # but because the url prefix here is '/' its simply 'http://127.0.0.1:5000/login'

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    # ensures database classes are created when starting up server
    from .models import User

    create_database(app)
    
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))

    return app


# the function that creates database
def create_database(app):
    if not path.exists('website/' + DB_NAME):
        db.create_all(app=app)
        
        print('Created Database!')

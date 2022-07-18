# Import the required libraries
from flask import Flask
import os
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from backend.db import db
from flask_login import LoginManager
# from flask_perm import Perm


cors = CORS()
# perm = Perm()
login_manager = LoginManager()
login_manager.session_protection = "strong"
login_manager.login_view = "login"
login_manager.login_message_category = "info"


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    

    if test_config is None:
        # load the instance config, if it exists, when not testing
       app.config.from_mapping(

        CORS_HEADERS= 'Content-Type',
        SQLALCHEMY_DATABASE_URI = "sqlite:///students.db",
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
        SECRET_KEY=os.environ.get('SECRET_KEY')
 
    )
    else:
        # load the test config if passed in , resources=r'/*'
        app.config.from_mapping(test_config)
    CORS(app,resources={r"/*": {"origins": "*"}})
    
  
    app.static_folder = 'static'
    login_manager.init_app(app)
    # perm.init_app(app)

    
   
    from backend.programs.routes import programs
    from backend.users.routes import users
    from backend.courses.routes import courses

    #registering blueprints    
    app.register_blueprint(courses)
    app.register_blueprint(programs)
    app.register_blueprint(users)

    
   
    @app.route('/')
    def index():
        return "<h1 >Women In Technology Uganda</h1>"

    db.app = app
    db.init_app(app)
    db.create_all()
   
    return app

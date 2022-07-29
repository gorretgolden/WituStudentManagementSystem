# Import the required libraries
from flask import Flask
from flask_restx import Api
from flask_cors import CORS
from db import db
from config import DevConfig
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager



    

def create_app(config):
    app=Flask(__name__,static_url_path='/',static_folder='./client/build')
    app.config.from_object(config)

    CORS(app)

    migrate=Migrate(app,db)


    JWTManager(app)


    from programs.routes import programs
    from users.routes import users
    from courses.routes import courses
    from intakes.routes import intakes

    api=Api(app,doc='/docs')
    

    api.add_namespace(users)
    api.add_namespace(courses)
    api.add_namespace(programs)
    api.add_namespace(intakes)


    db.app = app
    db.init_app(app)
    db.create_all()

   
    return app

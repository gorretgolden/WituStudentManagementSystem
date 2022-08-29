# Import the required libraries
from flask import Flask
from flask_restx import Api
from flask_cors import CORS
from db import db
from config import DevConfig
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_mail import Mail, Message


    
#application factory function
def create_app(config):
    app=Flask(__name__,static_url_path='/',static_folder='./static')
    app.config.from_object(config)

    CORS(app)
    mail= Mail(app)

    JWTManager(app)
    from programs.routes import programs
    from users.routes import users
    from courses.routes import courses
    from roles.routes import roles
    from semisters.routes import semisters
    from course_units.routes import course_units


   #creating docs
    api=Api(app,doc='/')
    
    api.add_namespace(roles)
    api.add_namespace(users)
    api.add_namespace(courses)
    api.add_namespace(programs)
    api.add_namespace(semisters)
    api.add_namespace(course_units)

    @app.route("/mail")
    def index():
        message=Message('Trials',sender="nabatanzigorret143@gmail.com",recipients=["nabatanzigorret143@gmail.com"])
        message.body = "Yo!\nHave you heard the good word of Python???"  
        mail.send(message)
        return 'mail sent'
      


    db.app = app
    db.init_app(app)
    db.create_all()
    

   
    return app

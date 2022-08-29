from decouple import config
import os
from datetime import timedelta
from flask_mail import Mail, Message

BASE_DIR = os.path.dirname(os.path.realpath(__file__))

class Config:
    SECRET_KEY=config('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS=config('SQLALCHEMY_TRACK_MODIFICATIONS',cast=bool)
    SQLALCHEMY_DATABASE_URI="sqlite:///witi-students.db"

path = os.getcwd()
class DevConfig(Config):
    SQLALCHEMY_DATABASE_URI="sqlite:///students.db"
    DEBUG=True #exceptions
    IMAGE_UPLOADS="./static/images/profiles"
    ALLOWED_IMAGE_EXTENSIONS =  ["PDF"]
    UPLOAD_FOLDER = os.path.join(path, 'uploads')
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024
    MAIL_SERVER='smtp.gmail.com'
    MAIL_PORT = 465
    MAIL_USERNAME = 'nabatanzigorret143@gmail.com'
    MAIL_PASSWORD = os.environ.get('PASSWORD')
    MAIL_USE_TLS = False
    MAIL_USE_SSL = True
    

class ProdConfig(Config):
    SQLALCHEMY_DATABASE_URI="sqlite:///students.db"
    DEBUG=config('DEBUG',cast=bool)
    SQLALCHEMY_ECHO=config('ECHO',cast=bool)
    SQLALCHEMY_TRACK_MODIFICATIONS=config('SQLALCHEMY_TRACK_MODIFICATIONS',cast=bool)

class TestConfig(Config):
    SQLALCHEMY_DATABASE_URI='sqlite:///test.db'
    SQLALCHEMY_ECHO=False
    TESTING=True
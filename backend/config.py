from decouple import config
import os
from datetime import timedelta

BASE_DIR = os.path.dirname(os.path.realpath(__file__))

class Config:
    SECRET_KEY=config('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS=config('SQLALCHEMY_TRACK_MODIFICATIONS',cast=bool)
    SQLALCHEMY_DATABASE_URI="sqlite:///witi-students.db"


class DevConfig(Config):
    SQLALCHEMY_DATABASE_URI="sqlite:///students.db"
    DEBUG=True #exceptions
    # SQLALCHEMY_ECHO=True


class ProdConfig(Config):
    SQLALCHEMY_DATABASE_URI="sqlite:///students.db"
    DEBUG=config('DEBUG',cast=bool)
    SQLALCHEMY_ECHO=config('ECHO',cast=bool)
    SQLALCHEMY_TRACK_MODIFICATIONS=config('SQLALCHEMY_TRACK_MODIFICATIONS',cast=bool)

class TestConfig(Config):
    SQLALCHEMY_DATABASE_URI='sqlite:///test.db'
    SQLALCHEMY_ECHO=False
    TESTING=True
from datetime import date, datetime
from flask_sqlalchemy import SQLAlchemy
from db import db



class Semister(db.Model):

   __tablename__ = 'semisters'   
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(80), nullable=False,unique=True)
   created_at = db.Column(db.DateTime, default=datetime.now())
   updated_at = db.Column(db.DateTime, onupdate=datetime.now())
   

   def __repr__(self):
        return "<Semister %r>" % self.name


   def save(self):
        db.session.add(self)
        db.session.commit()

   def delete(self):
        db.session.delete(self)
        db.session.commit()

   def update(self,name):
        self.name = name
        db.session.commit()

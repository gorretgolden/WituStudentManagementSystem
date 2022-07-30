from datetime import date, datetime
from email.policy import default
from flask_sqlalchemy import SQLAlchemy
from db import db


class Intake(db.Model):
   id: int
   month: str
   created_at:datetime
   updated_at:datetime


   __tablename__ = 'intakes'   
   id = db.Column(db.Integer, primary_key=True)
   month = db.Column(db.String(80), nullable=False)
   created_at = db.Column(db.DateTime, default=datetime.now())
   created_at = db.Column(db.DateTime, default=datetime.now())
   updated_at = db.Column(db.DateTime, onupdate=datetime.now())
   

   def __repr__(self):
        return "<Intake %r>" % self.month


   def save(self):
        db.session.add(self)
        db.session.commit()


   def delete(self):
        db.session.delete(self)
        db.session.commit()


   def update(self,name):
        self.name = name
        db.session.commit()

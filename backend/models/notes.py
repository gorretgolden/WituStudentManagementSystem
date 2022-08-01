from datetime import date, datetime
from email.policy import default
from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass
from backend import db


@dataclass
class Note(db.Model):
   id: int

   file:str
   is_uploaded:bool
   created_at:datetime
   updated_at:datetime

   __tablename__ = 'notes'   
   id = db.Column(db.Integer, primary_key=True)
   is_uploaded = db.Column(db.Boolean(), default=False)
   file = db.Column(db.Image(), nullable=True)
   course_unit_id = db.Column(db.Integer, db.ForeignKey('course_units.id',ondelete='CASCADE'))
   created_at = db.Column(db.DateTime, default=datetime.now())
   updated_at = db.Column(db.DateTime, onupdate=datetime.now())
   

   def __repr__(self):
        return "<Note %r>" % self.name

  

   def save(self):
        db.session.add(self)
        db.session.commit()

   def delete(self):
        db.session.delete(self)
        db.session.commit()

   def update(self,title,description):
        self.title=title
        self.description=description

        db.session.commit()

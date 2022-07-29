from datetime import date, datetime
from email.policy import default
from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass
from backend import db

@dataclass
class Student(db.Model):
   id: int
   email: str
   password: str
   first_name:str
   second_name:str
   password:str
   address:str
   guardian_name:str
   guardian_contact:str
   guardian_relationship:str
   image:str
   age:int
   dob:date
  
   is_admitted:bool
   created_at:datetime
   updated_at:datetime

   __tablename__ = 'students'   

   id = db.Column(db.Integer, primary_key=True)
   first_name = db.Column(db.String(80), nullable=False)
   last_name =db.Column(db.String(80), nullable=False)
   username = db.Column(db.String(), nullable=False)
   gender = db.Column(db.String(), nullable=False)
   age = db.Column(db.Integer(), nullable=False)
   dob = db.Column(db.Date(), nullable=False)
   email = db.Column(db.String(120), unique=True, nullable=False)
   address = db.Column(db.String(120), unique=True, nullable=True)
   guardian_name =db.Column(db.String(), nullable=False)
   guardian_relationship =db.Column(db.String(), nullable=False)
   guardian_contact=db.Column(db.String(120), unique=True, nullable=False)
   password = db.Column(db.Text(), nullable=False)
   image =db.Column(db.String(), nullable=True)
   is_admitted =db.Column(db.Boolean(),default=False)
   created_at = db.Column(db.DateTime, default=datetime.now())
   updated_at = db.Column(db.DateTime, onupdate=datetime.now())
   

   def __repr__(self):
        return "<student %r>" % self.name

   def __repr__(self):
        return "<Assignment %r>" % self.name

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

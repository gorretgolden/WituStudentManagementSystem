from datetime import date, datetime
from email.policy import default
from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass
from backend import db



class Application(db.Model):
   id: int

   uace_file:str
   uce_file:str
   start_date:date
   deadline_date:date
   opened_date:date
   is_uploaded:bool
   is_submitted:bool
   study_session:str
   program_id:int
   user_id:int
   created_at:datetime
   updated_at:datetime
   status:str 

   __tablename__ = 'applications'   
   id = db.Column(db.Integer, primary_key=True)
   uace_file = db.Column(db.String(120), unique=True, nullable=True)
   uce_file = db.Column(db.String(120), unique=True, nullable=True)
   status = db.Column(db.Text(120), default='Pending')
   deadline_date = db.Column(db.Date(120), unique=True, nullable=True)
   opened_date = db.Column(db.Date(120), unique=True, nullable=True)
   intake_type =  db.Column(db.Integer, db.ForeignKey('intakes.id',ondelete='CASCADE'))
   study_session = db.Column(db.String(120), unique=True, default='Day')
   program_id = db.Column(db.Integer, db.ForeignKey('programs.id',ondelete='CASCADE'))
   user_id = db.Column(db.Integer, db.ForeignKey('users.id',ondelete='CASCADE'))
   created_at = db.Column(db.DateTime, default=datetime.now())
   updated_at = db.Column(db.DateTime, onupdate=datetime.now())
   

   def __repr__(self):
        return "<Application %r>" % self.name


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

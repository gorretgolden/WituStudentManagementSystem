from datetime import date, datetime
from flask_sqlalchemy import SQLAlchemy
from db import db



class CourseUnit(db.Model):
   id: int
   name: str
   description: str
   created_at:datetime
   updated_at:datetime

   __tablename__ = 'course_units'   
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(80), nullable=False,unique=True)
   description = db.Column(db.Text(120), unique=True, nullable=True)
   programe_id = db.Column(db.Integer, db.ForeignKey('programs.id',ondelete='CASCADE'))
   semister_id = db.Column(db.Integer, db.ForeignKey('semisters.id',ondelete='CASCADE'))
   created_at = db.Column(db.DateTime, default=datetime.now())
   updated_at = db.Column(db.DateTime, onupdate=datetime.now())
   

   def __repr__(self):
        return "<CourseUnit %r>" % self.name


   def save(self):
        db.session.add(self)
        db.session.commit()

   def delete(self):
        db.session.delete(self)
        db.session.commit()

   def update(self,name,description,programe_id):
        self.name = name
        self.description=description
        self.programe_id=programe_id 
        db.session.commit()

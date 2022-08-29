from datetime import date, datetime
from flask_sqlalchemy import SQLAlchemy
from db import db



class CourseUnit(db.Model):
   __tablename__ = 'course_units'   
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(80), nullable=False,unique=True)
   programe_id = db.Column(db.Integer, db.ForeignKey('programs.id',ondelete='CASCADE'))
   semister_id = db.Column(db.Integer, db.ForeignKey('semisters.id',ondelete='CASCADE'))
   created_by = db.Column(db.Integer,nullable=False)
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

   def update(self,name,programe_id,semister_id,created_by):
        self.name = name
        self.programe_id=programe_id 
        self.semister_id=semister_id
        self.created_by=created_by
        db.session.commit()

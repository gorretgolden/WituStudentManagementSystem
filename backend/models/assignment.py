from datetime import date, datetime
from flask_sqlalchemy import SQLAlchemy

from db import db



class Assignment(db.Model):

   __tablename__ = 'assignments'   
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(80), nullable=False)
   description = db.Column(db.Text(120), unique=True, nullable=True)
   programe_id = db.Column(db.Integer, db.ForeignKey('programs.id',ondelete='CASCADE'))
   created_at = db.Column(db.DateTime, default=datetime.now())
   created_at = db.Column(db.DateTime, default=datetime.now())
   updated_at = db.Column(db.DateTime, onupdate=datetime.now())
   

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

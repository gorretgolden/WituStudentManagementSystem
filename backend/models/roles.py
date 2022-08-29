from datetime import date, datetime
from db import db


class Role(db.Model):

   __tablename__ = 'roles'   
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(80), nullable=False)
   created_at = db.Column(db.DateTime, default=datetime.now())
   updated_at = db.Column(db.DateTime, onupdate=datetime.now())
   

   def __repr__(self):
        return "<Role %r>" % self.name


   def save(self):
        db.session.add(self)
        db.session.commit()

   def delete(self):
        db.session.delete(self)
        db.session.commit()

   def update(self,name):
        self.name = name
        db.session.commit()


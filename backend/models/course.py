from datetime import date, datetime
from db import db



class StudentCourse(db.Model):
   
   __tablename__ = 'courses'   
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(255),unique=True, nullable=False)
   description = db.Column(db.Text(120), nullable=True)
   duration = db.Column(db.String(), nullable=False)
   created_at = db.Column(db.DateTime, default=datetime.now())
   updated_at = db.Column(db.DateTime, onupdate=datetime.now())
   

   def __repr__(self):
        return "<StudentCourse %r>" % self.name


   def save(self):
      db.session.add(self)
      db.session.commit()



   def update(self,name,description,duration):  
        self.name=name
        self.description=description
        self.duration=duration
        db.session.commit()

   def delete(self):
        db.session.delete(self)
        db.session.commit()
      
      
    

 
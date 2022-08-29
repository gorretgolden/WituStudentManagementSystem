from datetime import date, datetime
from db import db


class Program(db.Model):
   __tablename__ = 'programs'   
   id = db.Column(db.Integer, primary_key=True)
   course_id = db.Column(db.Integer, db.ForeignKey('courses.id',ondelete='CASCADE'))
   name = db.Column(db.String(255),unique=True, nullable=False)
   description = db.Column(db.Text(120),  nullable=True)
   start_date = db.Column(db.String(), nullable=False)
   end_date = db.Column(db.String(), nullable=False)
   status = db.Column(db.String(), nullable=False,default="Inprogress")
   created_at = db.Column(db.DateTime, default=datetime.now())
   updated_at = db.Column(db.DateTime, onupdate=datetime.now())
   

   def __repr__(self):
        return "<Program %r>" % self.name

 

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
     

  
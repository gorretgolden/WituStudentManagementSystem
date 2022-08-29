from datetime import date, datetime
from flask_sqlalchemy import SQLAlchemy
from db import db


class Exam(db.Model):


   __tablename__ = 'exams'   
   id = db.Column(db.Integer, primary_key=True)
   mark = db.Column(db.Interger, nullable=False)
   couse_unit_id = db.Column(db.Integer, db.ForeignKey('couse_units.id',ondelete='CASCADE'))
   student_id = db.Column(db.Integer, db.ForeignKey('users.id',ondelete='CASCADE'))
   created_at = db.Column(db.DateTime, default=datetime.now())
   updated_at = db.Column(db.DateTime, onupdate=datetime.now())
   

   def __repr__(self):
        return "<Exam %r>" % self.name


   def save(self):
        db.session.add(self)
        db.session.commit()

   def delete(self):
        db.session.delete(self)
        db.session.commit()

   def update(self,mark,student_id,course_unit_id):
        self.mark=mark
        self.student_id=student_id
        self.couse_unit_id=course_unit_id

        db.session.commit()

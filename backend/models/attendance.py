from datetime import date, datetime
from email.policy import default
from flask_sqlalchemy import SQLAlchemy
from backend import db


class Attendance(db.Model):
    id=db.Column(primary_key=True)
    course_unit=db.Column(db.Integer, db.ForeignKey('attendances.id',ondelete='CASCADE'))
    attendance_date=db.Column(db.DateTime, onupdate=datetime.now())


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

 
   
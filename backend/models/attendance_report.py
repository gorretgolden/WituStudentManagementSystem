from datetime import datetime
from xmlrpc.client import Boolean
from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass
from models.attendance import Attendance
from backend import db


class AttendanceReport(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    student_id=db.Column(db.Integer, db.ForeignKey('students.id',ondelete='CASCADE'))
    attendance_id=db.Column(db.Integer, db.ForeignKey('attendances.id',ondelete='CASCADE'))
    status=db.Column(db.Boolean,default=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    deleted_at = db.Column(db.DateTime, default=datetime.now())
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


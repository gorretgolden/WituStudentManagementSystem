from datetime import date, datetime
from email.policy import default
from flask_sqlalchemy import SQLAlchemy
from db import db


class Student(db.Model):
    id: int
    email: str
    password: str
    first_name: str
    second_name: str
    password: str
    address: str
    guardian_name: str
    guardian_contact: str
    guardian_relationship: str
    image: str
    age: int
    dob: date

    is_admitted: bool
    created_at: datetime
    updated_at: datetime

    __tablename__ = 'students'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    dob = db.Column(db.Date(), nullable=False)
    contact = db.Column(db.String, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    address = db.Column(db.String(120), nullable=False)
    guardian_name = db.Column(db.String(), nullable=False)
    guardian_relationship = db.Column(db.String(), nullable=False)
    guardian_contact = db.Column(db.String(120), nullable=False)
    password = db.Column(db.Text(), default="12345678")
#    image =db.Column(db.String(), nullable=True)
    is_admitted = db.Column(db.Boolean(), default="Yes")
    program_id = db.Column(db.Integer, db.ForeignKey(
        'program.id', ondelete='CASCADE'))
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    def __repr__(self):
        return "<student %r>" % self.name

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

       
    def update(self, first_name,last_name,dob,email,address,guardian_name,guardian_relationship,guardian_contact,contact,password,program_id,is_admitted ):

        self.first_name = first_name
        self.last_name =last_name 
        self.dob = dob
        self.email =email
        self.address =address  
        self.guardian_name = guardian_name 
        self.guardian_relationship =guardian_relationship
        self.guardian_contact = guardian_contact
        self.contact = contact
        self.password =password
        self.is_admitted = is_admitted
        self.program_id = program_id

        db.session.commit()

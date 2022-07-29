from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from db import db



class User(db.Model):
   __tablename__ = 'users'   
   id = db.Column(db.Integer, primary_key=True,autoincrement=True)
   first_name = db.Column(db.String(50), index=True, unique=True,nullable=False)
   last_name = db.Column(db.String(50), index=True, unique=True,nullable=False)
   email = db.Column(db.String(150), unique = True, nullable=False)
   contact = db.Column(db.String(150), unique = True, nullable=False)
   password = db.Column(db.String(150))
   created_at = db.Column(db.DateTime(), default = datetime.utcnow, index = True)
   updated_at = db.Column(db.DateTime(), default = datetime.utcnow, index = True)

   def __repr__(self):
        return f"<User {self.email} >"
        
   #save a new instance
   def save(self):
        db.session.add(self)
        db.session.commit()

   #delete the item
   def delete(self):
        db.session.delete(self)
        db.session.commit()

   def update(self,first_name,last_name,email,contact,password):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.contact = contact
        self.password = password
        

        db.session.commit()     

import datetime
from db import db  

class Profile(db.Model):
   id = db.Column(db.Integer, primary_key=True)
   img_name = db.Column(db.String(255), nullable=False)
   user_id = db.Column(db.Integer, db.ForeignKey('users.id',ondelete='CASCADE'))
   created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)
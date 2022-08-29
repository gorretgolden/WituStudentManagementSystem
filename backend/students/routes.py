# from flask import jsonify, request, jsonify, make_response
# from validate_email import validate_email
# from werkzeug.security import check_password_hash, generate_password_hash
# from models.students import Student
# from models.user import User
# from db import db
# from flask_restx import Api, Resource, Namespace, fields

# from flask_jwt_extended import (
#     create_access_token, create_refresh_token, get_jwt_identity, jwt_required)

# students = Namespace('students')

# # student serialization model
# student_model = students.model(
#     'Student',
#     {   
#         "id":fields.Integer(),
#         "first_name": fields.String(),
#         "last_name": fields.String(),
#         "email": fields.String(),
#         "contact": fields.String(),
#         "address": fields.String(),
#         "password": fields.String(),
#         "role_id": fields.String(),
#         "program_id": fields.String(),
#         "dob": fields.String(),
#         "guardian_name": fields.String(),
#         "guardian_contact": fields.String(),
#         "guardian_relationship": fields.String(),
#          "is_admitted": fields.String(),
       
#     }
# )

# # login serialization model
# login_model = students.model(
#     'Login',
#     {
#         'email': fields.String(),
#         'password': fields.String()
#     }
# )


# @students.route('/signup')
# class SignUp(Resource):
#     @students.expect(user_model)
#     def post(self):
#         data = request.get_json()

#         first_name = data.get('first_name')
#         last_name = data.get('last_name')
#         email = data.get('email')
#         contact = data.get('copSntact')
#         address = data.get('address')
#         password = data.get('password')
#         role_id = data.get('role_id')
#         # email conflicts
#         user_email = User.query.filter_by(email=email).first()

#         if user_email is not None:
#             return jsonify({"message": f" {email} already exists"})

#         # contact conflicts
#         # user_contact = User.query.filter_by(contact=contact).first()
#         # if user_contact is not None:
#         #     return jsonify({"message": f" {contact} already exists"})

#         # short password
#         if len(password) < 6:
#             return jsonify({'error': "Password is too short"}), 400

#         # email validation
#         if not validate_email(email):
#             return jsonify({'error': "Invalid email address"}), 400

#         if not first_name:
#             return jsonify({'error': "First name is required"})

#         if not last_name:
#             return jsonify({'error': "Last name is required"})

#         new_user = User(
#             role_id=role_id,
#             first_name=first_name,
#             last_name=last_name,
#             email=email,
#             contact=contact,
#             address=address,
#             password=generate_password_hash(data.get('password'))
#         )

#         new_user.save()

#         return make_response(jsonify({"message": "User created successfully"}), 201)


# @students.route('/students')
# class RegisterStudent(Resource):
#     @students.expect(student_model)
#     def post(self):
#         data = request.get_json()

#         first_name = data.get('first_name')
#         last_name = data.get('last_name')
#         email = data.get('email')
#         contact = data.get('copSntact')
#         address = data.get('address')
#         password = data.get('password')
#         role_id = data.get('role_id')
#         guardian_name = data.get('guardian_name')
#         guardian_relationship = data.get('guardian_relationship')
#         guardian_contact = data.get('guardian_contact')
#         is_admitted = data.get('is_admitted')
#         program_id = data.get('program_id')
       
       
#         # email conflicts
#         student_email = Student.query.filter_by(email=email).first()

#         if student_email is not None:
#             return jsonify({"message": f" {email} already exists"})

    

#         # short password
#         if len(password) < 6:
#             return jsonify({'error': "Password is too short"}), 400

#         # email validation
#         if not validate_email(email):
#             return jsonify({'error': "Invalid email address"}), 400

#         if not first_name:
#             return jsonify({'error': "First name is required"})

#         if not last_name:
#             return jsonify({'error': "Last name is required"})



#         if not role_id:
#             return jsonify({'error': "Role id is required"})    
        

    
#         if not contact:
#             return jsonify({'error': "Contact is required"})   

              
#         if not address:
#             return jsonify({'error': "Address is required"})   
    
#         new_student= Student(
#             role_id=role_id,
#             first_name=first_name,
#             last_name=last_name,
#             email=email,
#             contact=contact,
#             address=address,
#             guardian_name=guardian_name,
#             guardian_relationship=guardian_relationship,
#             guardian_contact=guardian_contact,
#             is_admitted=is_admitted,
#             program_id=program_id,
#             password=generate_password_hash(data.get('password'))
#         )

#         new_student.save()

#         return make_response(jsonify({"message": "Student created successfully"}), 201)


# @students.route('/login')
# class Login(Resource):

#     @students.expect(login_model)
#     def post(self):
#         data = request.get_json()

#         email = data.get('email')
#         password = data.get('password')

#         # check if user email exists
#         user = User.query.filter_by(email=email).first()

#         if user and check_password_hash(user.password, password):

#             access_token = create_access_token(identity=user.email)
#             refresh_token = create_refresh_token(identity=user.email)

#             return jsonify(
#                 {
#                     "access_token": access_token,
#                     "refresh_token": refresh_token
#                 }
#             )

#         else:
#             return make_response(jsonify({"message": "Invalid username or password"}), 200)


# # refresh token endpoint
# @students.route('/refresh')
# class RefreshResource(Resource):
#     @jwt_required(refresh=True)
#     def post(self):

#         current_user = get_jwt_identity()

#         new_access_token = create_access_token(identity=current_user)

#         return make_response(jsonify({"access_token": new_access_token}), 200)


# # #retrieving all students
# @students.route('/')
# class studentsResource(Resource):

#     @students.marshal_list_with(user_model)
#     def get(self):
#         """Get all students """
#         students = User.query.all()
#         return students


# # retrieving students by roles

# @students.route('/students')
# class StudentsRoleResource(Resource):

#     @students.marshal_list_with(user_model)
#     def get(self):
#         """Get all students """

#         students = User.query.filter_by(role_id=1).all()
#         return students


# @students.route('/tutors')
# class TutorsRoleResource(Resource):

#     @students.marshal_list_with(user_model)
#     def get(self):
#         """Get all tutors """

#         tutors = User.query.filter_by(role_id=2).all()
#         return tutors


# @students.route('/<int:id>')
# class UserResource(Resource):

#     @students.marshal_with(user_model)
#     def get(self, id):
#         """Get a user by id """
#         user = User.query.get_or_404(id)

#         return user


# @students.marshal_with(user_model)
# @jwt_required()
# def delete(self, id):

#     deleted_user = User.query.get_or_404(id)
#     deleted_user.delete()
#     return deleted_user

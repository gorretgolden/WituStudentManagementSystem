from flask import  jsonify, request, Blueprint
from models.application import Application
from db import db
from models.course import Course
from flask_restx import Api, Resource, Namespace, fields
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename
import os

applications=Namespace('applications')


application_form=applications.model(
    "Application Form",
    {
        "id":fields.Integer(),
        "uace_file":fields.String(),
        "uce_file":fields.String(),
        "deadline_date":fields.Date(),
       " opened_date":fields.Date(),
       " is_uploaded":fields.Boolean(),
        "is_submitted":fields.Boolean(),
        "study_session":fields.String(),
        "program_id":fields.Integer(),
        "user_id":fields.Integer(),
       " status":str 
    
    }
)


@applications.route('/')
class ApplicationResource(Resource):

    @applications.marshal_list_with(application_form)
    def get(self):
        """Get all applications """

        applications=Application.query.all()
        
        return applications

# UPLOAD_FOLDER = '../uploads'
# ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
# def allowed_file(filename):
#     return '.' in filename and \
#            filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS       

# #creating applications
# @applications.route('/')
# class ApplicationResource(Resource):

#     @applications.marshal_list_with(application_form)
#     def get(self):
#         """Get all applications """

#         applications=Application.query.all()
        
#         return applications


#     @applications.marshal_with(application_form)
#     @applications.expect(application_form)
#     @jwt_required()
#     def post(self):
#         """Apply for a program"""

#         data=request.get_json()
#         if 'file' not in request.files:
            
#             return jsonify({"message": "No file selected"})
        
#         file = request.files['file']
#         # If the user does not select a file, the browser submits an
#         # empty file without a filename.
#         if file.filename == '':
#             return jsonify({"message": "No file selected"})
          
#         if file and allowed_file(file.filename):
#             filename = secure_filename(file.filename)
#             file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
#             return redirect(url_for('download_file', name=filename))
        
        


        new_application=Application(
            name=data.get('name')
          
          
        )

        new_application.save()

        return new_application,201



#retrieving a single course
@applications.route('/<int:id>')
class ApplicationResource(Resource):

    @applications.marshal_with(application_form)
    def get(self,id):
        """Get a course by id """
        course_unit=Application.query.get_or_404(id)

        return course_unit


    @applications.marshal_with(application_form)
    @jwt_required()
    def put(self,id):
        """Update a course by id """
        

        course_unit=Course.query.get_or_404(id)

        data=request.get_json()
        name = data.get('name')
       
    
        course_unit.update(name)

        return course_unit


    @applications.marshal_with(application_form)
    @jwt_required()
    def delete(self,id):
        """Delete an application by id """

        application=Application.query.get_or_404(id)

        application.delete()

        return 
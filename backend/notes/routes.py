import os
from flask import  jsonify, request, Blueprint,make_response
from backend.models.notes import Note
from db import db
from models.course import Course
from flask_restx import Api, Resource, Namespace, fields
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename

notes=Namespace('notes')


note_model=notes.model(
    "note",
    {
        "id":fields.Integer(),
        "flile":fields.String(),
        "course_unit_id":fields.Integer(),
        
    
    }
)
UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
    
#creating notes
@notes.route('/')
class NotesResource(Resource):

    @notes.marshal_list_with(note_model)
    def get(self):
        """Get all notes """

        notes=Note.query.all()
        
        return notes


    @notes.marshal_with(note_model)
    @notes.expect(note_model)
    def post(self):

        """Create new notes"""

        data=request.get_json()
        file = data.get('name')
        course_unit_id= data.get('course_unit_id')

        if 'files[]' not in request.files:
            resp = make_response(jsonify({'message':'No file exists'}))
            resp.status_code = 400
            return resp
        

        files = request.files.getlist('files[]')
        errors = {}
        success = False


        for file in files:
            if file in allowed_file(file.filename):
                file_name = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'],filename))
                success = True
            else:

                errors[file.filename] = 'File type is not allowed'    

   
        

  

        return make_response(jsonify({"message": "note created successfully"}), 201)



#retrieving a single note
@notes.route('/<int:id>')
class noteResource(Resource):

    @notes.marshal_with(note_model)
    def get(self,id):
        """Get a note by id """
        note=note.query.get_or_404(id)

        return note


    @notes.marshal_with(note_model)
    @jwt_required()
    def put(self,id):
        """Update a course by id """
        

        course=Course.query.get_or_404(id)

        data=request.get_json()
        name = data.get('name')
        description = data.get('description')
        duration = data.get('duration')
  

        course.update(name,description,duration)

        return course


    @notes.marshal_with(note_model)
    @jwt_required()
    def delete(self,id):
        """Delete a recipe by id """

        course=Course.query.get_or_404(id)

        course.delete()

        return make_r
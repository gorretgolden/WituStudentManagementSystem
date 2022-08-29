from flask import  jsonify, request, Blueprint,make_response
import db
from models.program import Program
from flask_restx import Api, Resource, Namespace, fields
from flask_jwt_extended import jwt_required

programs=Namespace('programs')


program_model=programs.model(
    "Program",
    {
        "id":fields.Integer(),
        "name":fields.String(),
        "start_date":fields.String(),
        "end_date":fields.String(),
        "description":fields.String(),
        "status":fields.String(),
        "course_id":fields.Integer()
    }
)



@programs.route('/')
class programsResource(Resource):

    @programs.marshal_list_with(program_model)
    def get(self):
        """Get all programs """

        programs=Program.query.all()
        
        return programs


        

#creating programs
@programs.route('/')
class ProgramsResource(Resource):

    @programs.marshal_list_with(program_model)
    def get(self):
        """Get all programs """

        programs=Program.query.all()
        
        return programs


    @programs.marshal_with(program_model)
    @programs.expect(program_model)
    @jwt_required()
    def post(self):
        """Create a new program"""

        data=request.get_json()

        new_program=Program(
            name=data.get('name'),
            description=data.get('description'),
            start_date=data.get('start_date'),
            end_date=data.get('end_date'),
            status = data.get('status'),
            course_id = data.get('course_id')  
        )

        new_program.save()

        return make_response(jsonify({"message": "Program created successfully"}), 201)



#retrieving a single program
@programs.route('/<int:id>')
class programResource(Resource):

    @programs.marshal_with(program_model)
    def get(self,id):
        """Get a program by id """
        program=program.query.get_or_404(id)

        return program


    @programs.marshal_with(program_model)
    @jwt_required()
    def put(self,id):
        """Update a program by id """
        

        program=program.query.get_or_404(id)

        data=request.get_json()
        name = data.get('name')
        description = data.get('description')
        start_date = data.get('start_date')
        end_date = data.get('end_date')
        status = data.get('status')

        program.update(name,description,start_date,end_date,status)

        return program


    @programs.marshal_with(program_model)
    @jwt_required()
    def delete(self,id):
        """Delete a recipe by id """

        program=program.query.get_or_404(id)

        program.delete()

        return 
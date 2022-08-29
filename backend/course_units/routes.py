from flask import  jsonify, request, Blueprint,make_response
from models.course_unit import CourseUnit
from models.course import StudentCourse
from flask_restx import Api, Resource, Namespace, fields
from flask_jwt_extended import jwt_required,get_jwt_identity


course_units=Namespace('course_units')


course_unit_model=course_units.model(
    "CourseUnit",
    {
        "id":fields.Integer(),
        "name":fields.String(),
        "programe_id":fields.Integer(),
        "semister_id":fields.Integer(),
        "created_by":fields.Integer()
 
    
    }
)


        

#creating course_units
@course_units.route('/')
class CourseUnitResource(Resource):

    @course_units.marshal_list_with(course_unit_model)
    def get(self):
        """Get all course_units """

        course_units=CourseUnit.query.all()
        
        return course_units


    @course_units.marshal_with(course_unit_model)
    @course_units.expect(course_unit_model)
    @jwt_required()
    def post(self):
        """Create a new course unit"""

        data=request.get_json()

        new_course_unit=CourseUnit(
            name=data.get('name'),
             program_id=data.get('program_id'),
             semister_id=data.get('semister_id'),
             created_by = get_jwt_identity()
        )

        new_course_unit.save()

        return make_response(jsonify({"message": "User created successfully"}), 201)



#retrieving a single course unit
@course_units.route('/<int:id>')
class CourseUnitResource(Resource):

    @course_units.marshal_with(course_unit_model)
    def get(self,id):
        """Get a course unit by id """
        course_unit=CourseUnit.query.get_or_404(id)

        return course_unit


    @course_units.marshal_with(course_unit_model)
    @jwt_required()
    def put(self,id):
        """Update a course unit by id """
        

        course_unit=Course.query.get_or_404(id)

        data=request.get_json()
        name = data.get('name')
        description = data.get('description')
        program_id = data.get('program_id')
        semister_id = data.get('semister_id')

        course_unit.update(name,description,program_id,semister_id)

        return course_unit


    @course_units.marshal_with(course_unit_model)
    @jwt_required()
    def delete(self,id):
        """Delete a course unit by id """

        course_unit=CourseUnit.query.get_or_404(id)

        course_unit.delete()

        return 
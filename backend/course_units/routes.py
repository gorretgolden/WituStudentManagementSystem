from flask import  jsonify, request, Blueprint
from models.course_unit import CourseUnit
from db import db
from models.course import Course
from flask_restx import Api, Resource, Namespace, fields
from flask_jwt_extended import jwt_required


course_units=Namespace('course_units')


course_unit_model=course_units.model(
    "CourseUnit",
    {
        "id":fields.Integer(),
        "name":fields.String()
    
    }
)


@course_units.route('/')
class CourseUnitResource(Resource):

    @course_units.marshal_list_with(course_unit_model)
    def get(self):
        """Get all course_units """

        course_units=CourseUnit.query.all()
        
        return course_units


        

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
        """Create a new course"""

        data=request.get_json()

        new_course=Course(
            name=data.get('name')
          
          
        )

        new_course.save()

        return new_course,201



#retrieving a single course
@course_units.route('/<int:id>')
class CourseUnitResource(Resource):

    @course_units.marshal_with(course_unit_model)
    def get(self,id):
        """Get a course by id """
        course_unit=CourseUnit.query.get_or_404(id)

        return course_unit


    @course_units.marshal_with(course_unit_model)
    @jwt_required()
    def put(self,id):
        """Update a course by id """
        

        course_unit=Course.query.get_or_404(id)

        data=request.get_json()
        name = data.get('name')
       
    
        course_unit.update(name)

        return course_unit


    @course_units.marshal_with(course_unit_model)
    @jwt_required()
    def delete(self,id):
        """Delete a recipe by id """

        course=Course.query.get_or_404(id)

        course.delete()

        return 
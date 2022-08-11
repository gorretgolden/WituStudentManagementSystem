from flask import  jsonify, request, Blueprint
from db import db
from models.course import Course
from flask_restx import Api, Resource, Namespace, fields
from flask_jwt_extended import jwt_required


courses=Namespace('courses')


course_model=courses.model(
    "Course",
    {
        "id":fields.Integer(),
        "name":fields.String(),
        "description":fields.String(),
        "duration":fields.String()
    
    }
)


@courses.route('/')
class CoursesResource(Resource):

    @courses.marshal_list_with(course_model)
    def get(self):
        """Get all courses """

        courses=Course.query.all()
        
        return courses


        

#creating courses
@courses.route('/')
class CoursesResource(Resource):

    @courses.marshal_list_with(course_model)
    def get(self):
        """Get all courses """

        courses=Course.query.all()
        
        return courses


    @courses.marshal_with(course_model)
    @courses.expect(course_model)
    def post(self):
        """Create a new course"""

        data=request.get_json()
        name = data.get('name')
        duration = data.get('duration')

        if not name:
            return jsonify({'error':"Course name is required"})

        if not duration:
            return jsonify({'error':"Course duration is required"}) 

         # name conflicts
        course_name = Course.query.filter_by(name=name).first()

        if course_name is not None:
            return jsonify({"message": f" {course_name} already exists"})
       

        new_course=Course(
            name=data.get('name'),
            description=data.get('description'),
            duration=data.get('duration')
          
        )

        new_course.save()

        return new_course,201



#retrieving a single course
@courses.route('/<int:id>')
class CourseResource(Resource):

    @courses.marshal_with(course_model)
    def get(self,id):
        """Get a course by id """
        course=Course.query.get_or_404(id)

        return course


    @courses.marshal_with(course_model)
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


    @courses.marshal_with(course_model)
    @jwt_required()
    def delete(self,id):
        """Delete a recipe by id """

        course=Course.query.get_or_404(id)

        course.delete()

        return 
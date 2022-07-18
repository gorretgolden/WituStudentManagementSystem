from flask import  jsonify, request, Blueprint
from backend import db
from backend.models.course import Course


courses = Blueprint('courses', __name__,url_prefix="/courses")



#retrieving all courses 
@courses.route("/", methods=['GET'])
def all_courses():
    #ensuring that a user has logged in
    all_courses = Course.query.all()
    return jsonify(all_courses),200



#retrieving a single course
@courses.route("/<int:course_id>", methods=['GET'])
def single_course(course_id):
    course = Course.query.filter_by(id=course_id).first()
    
    #course that does'nt exist
    if not course:
        return jsonify({'message': '  Course not found'}), 404
    return jsonify(course),200


#creating courses
@courses.route("/", methods=["POST"])
def new_courses():
    
    if request.method == "POST":
        
     
        name = request.json['name']
        description = request.json['description']
        duration = request.json['duration']

 
       #empty fields for validations
      
        if not name:
                 
          return jsonify({'error': 'course name is required'}), 400 #bad request
             
       
        if not duration:
                return jsonify({'error': 'Duration field is required'}), 400
        
        #checking if name exists
        if Course.query.filter_by(name=name).first():
                return jsonify({
                'error': 'Course name already exists'
            }), 409 #conflicts
      
           
        #For valid data
        #inserting values into the courses_list
        new_course = Course(name=name,description=description)
        db.session.add(new_course)
        db.session.commit()
        
    return jsonify({'message':'Added a new course successfully','name':name,'description':description,'duration':duration}),200
    


 
# #deleting a course
@courses.route("/<int:course_id>", methods=['DELETE'])

def delete_courses(course_id):

    course = Course.query.filter_by(id=course_id).first()

    if not course:
        return jsonify({'message': 'Course not found'}), 404

    db.session.delete(course)
    db.session.commit()

    return jsonify({'message':'Course deleted successfully'}), 20
# #updating a course
#




from flask import  jsonify, request, Blueprint,make_response
from models.exam import Exam
from db import db
from flask_restx import Api, Resource, Namespace, fields
from flask_jwt_extended import jwt_required


exams=Namespace('exams')#blueprint

#serializers
exams_model=exams.model(
    "Exam",
    {
        "id":fields.Integer(),
        "mark":fields.Integer(),
        "student_id":fields.Integer(),
        "course_unit_id":fields.Integer()
    
    }
)


        

#creating exams
@exams.route('/')
class ExamsResource(Resource):

    @exams.marshal_list_with(exams_model)
    def get(self):
        """Get all exam marks """

        exam_marks=Exam.query.all()
        
        return exam_marks


    @exams.marshal_with(exams_model)
    @exams.expect(exams_model)
    def post(self):
        """Create a new exam mark"""

        data=request.get_json()
        mark = data.get('mark')
        student_id= data.get('student_id')
        course_unit_id = data.get('course_unit_id')

 
        #exam name conflicts
        exam = Exam.query.filter_by(mark=mark,student_id=student_id,course_unit_id=course_unit_id).first()
        if exam is not None:
            return jsonify({"message": f" {exam} name already exists"})

        if not mark:
            return jsonify({'error':"Exam mark  is required"})

        new_mark=Exam(mark=mark,student_id=student_id,course_unit_id=course_unit_id)

        new_mark.save()

        return make_response(jsonify({"message":"exam created successfully"}),201)



#retrieving a single exam
@exams.route('/exam/<int:id>')
class ExamResource(Resource):

    @exams.marshal_with(exams_model)
    def get(self,id):
        """Get a exam by id """
        exam=Exam.query.get_or_404(id)

        return exam


    @exams.marshal_with(exams_model)
    @jwt_required()
    def put(self,id):
        """Update a exam by id """
        

        updated_exam=Exam.query.get_or_404(id)

        data=request.get_json()
        mark = data.get('mark')
        student_id = data.get('student_id')
        course_unit_id = data.get('student_id')
        updated_exam.update(mark,student_id,course_unit_id)

        return updated_exam


    @exams.marshal_with(exams_model)
    @jwt_required()
    def delete(self,id):
        """Delete a exam by id """

        exam_deleted=Exam.query.get_or_404(id)

        exam_deleted.delete()

        return exam_deleted 
# from flask import  jsonify, request, Blueprint
# from flask_jwt_extended import jwt_required,get_jwt_identity
# from backend import db
# from backend.models.course_unit import CourseUnit

# questions = Blueprint('questions', __name__,url_prefix="/questions")



# #retrieving all questions 
# @questions.route("/", methods=['GET'])
# def all_questions():
#     #ensuring that a user has logged in
#     all_questions = Question.query.all()
#     return jsonify(all_questions),200


# #retrieving all questions for a user
# @questions.route("/users/<int:user_id>", methods=['GET'])
# @jwt_required()
# def all_user_questions(user_id):
#     #ensuring that a user has logged in
#     user_id= get_jwt_identity()
#     all_questions = Question.query.filter_by(id=user_id).all()
#     return jsonify(all_questions),200




# #creating questions
# @questions.route("/", methods=["POST"])
# @jwt_required()
# def new_questions():
    
#     if request.method == "POST":
        
#         user_id = get_jwt_identity()
#         title = request.json['title']
#         body = request.json['body']
#         tag = request.json['tag']
       
       

#        #empty fields
      
#         if not title:
                 
#           return jsonify({'error': 'Please provide a title for the question'}), 400 #bad request
          
#         if not body:
#                 return jsonify({'error': 'Please provide a body for the question'}), 400
#         #empty fields
      

          
#         if not tag:
#                 return jsonify({'error': 'Please add a tag for the question ie python '}), 400
        
#         #checking if title exists
#         if Question.query.filter_by(title=title).first():
#                 return jsonify({
#                 'error': 'Question title exists'
#             }), 409 #conflicts
        
#         #checking if body exists
#         if Question.query.filter_by(body=body).first():
#                 return jsonify({
#                 'error': 'Question body already exists'
#             }), 409
        
           

#         #inserting values into the questions_list
#         new_question = Question(title=title,body=body,user_id=user_id,tag=tag)
#         db.session.add(new_question)
#         db.session.commit()
        
         
  
#     return jsonify({'message':'new question posted','tag':tag,'title':title,'body':body,'user_id':user_id}),200
    


 
# # #deleting a question
# @questions.route("/remove/<string:questionId>", methods=['DELETE'])
# @jwt_required()
# def delete_questions(questionId):
#     current_user = get_jwt_identity()

#     question = Question.query.filter_by(user_id=current_user, id=questionId).first()

#     if not question:
#         return jsonify({'message': 'Item not found'}), 404

#     db.session.delete(question)
#     db.session.commit()

#     return jsonify({}), 204

    



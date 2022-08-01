from flask import  jsonify, request, Blueprint
from db import db
from models.intakes import Intake
from flask_restx import Api, Resource, Namespace, fields
from flask_jwt_extended import jwt_required


intakes=Namespace('intakes')


intake_model=intakes.model(
    "Intake",
    {
        "id":fields.Integer(),
        "month":fields.String()
    
    }
)


        

#creating and retrieving intakes
@intakes.route('/')
class intakesResource(Resource):

    @intakes.marshal_list_with(intake_model)
    def get(self):
        """Get all intakes """

        intakes=Intake.query.all()
        
        return intakes


    @intakes.marshal_with(intake_model)
    @intakes.expect(intake_model)
    @jwt_required()
    def post(self):
        """Create a new intake"""

        data=request.get_json()

        new_intake=Intake(
            month=data.get('month'),
 
          
        )

        new_intake.save()

        return new_intake,201



#retrieving a single intake
@intakes.route('/<int:id>')
class intakeResource(Resource):

    @intakes.marshal_with(intake_model)
    def get(self,id):
        """Get a intake by id """
        intake=intake.query.get_or_404(id)

        return intake


    @intakes.marshal_with(intake_model)
    @jwt_required()
    def put(self,id):
        """Update a intake by id """
    
        intake=Intake.query.get_or_404(id)
        data=request.get_json()
        month = data.get('month')
        intake.update(month)

        return intake


    @intakes.marshal_with(intake_model)
    @jwt_required()
    def delete(self,id):
        """Delete a recipe by id """

        intake=intake.query.get_or_404(id)

        intake.delete()

        return 
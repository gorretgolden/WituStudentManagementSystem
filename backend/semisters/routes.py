from flask import  jsonify, request, Blueprint
from models.semister import Semister
from flask_restx import Api, Resource, Namespace, fields
from flask_jwt_extended import jwt_required


semisters=Namespace('semisters')


semister_model=semisters.model(
    "Semister",
    {
        "id":fields.Integer(),
        "name":fields.String()
    
    }
)


        

#creating semisters
@semisters.route('/')
class SemisterResource(Resource):

    @semisters.marshal_list_with(semister_model)
    def get(self):
        """Get all semisters """

        semisters=Semister.query.all()
        
        return semisters


    @semisters.marshal_with(semister_model)
    @semisters.expect(semister_model)
    @jwt_required()
    def post(self):
        """Create a new semister"""

        data=request.get_json()

        new_semister=Semister(
            name=data.get('name')
          
          
        )

        new_semister.save()

        return new_semister,201



#retrieving a single Semister
@semisters.route('/semister/<int:id>')
class SemisterResource(Resource):

    @semisters.marshal_with(semister_model)
    def get(self,id):
        """Get a Semister by id """
        semister=Semister.query.get_or_404(id)

        return semister


    @semisters.marshal_with(semister_model)
    @jwt_required()
    def put(self,id):
        """Update a Semister by id """
        

        semister=Semister.query.get_or_404(id)

        data=request.get_json()
        name = data.get('name')
       
    
        semister.update(name)

        return semister


    @semisters.marshal_with(semister_model)
    @jwt_required()
    def delete(self,id):
        """Delete a semister by id """

        semister=Semister.query.get_or_404(id)

        semister.delete()

        return semister
from flask import  jsonify, request, Blueprint
from models.roles import Role
from db import db
from models.course import Course
from flask_restx import Api, Resource, Namespace, fields
from flask_jwt_extended import jwt_required


roles=Namespace('roles')#blueprint

#serializers
roles_model=roles.model(
    "Role",
    {
        "id":fields.Integer(),
        "name":fields.String()
    
    }
)


@roles.route('/')
class RolesResource(Resource):

    @roles.marshal_list_with(roles_model)
    def get(self):
        """Get all roles """

        roles=Role.query.all()
        
        return roles


        

#creating roles
@roles.route('/')
class RolesResource(Resource):

    @roles.marshal_list_with(roles_model)
    def get(self):
        """Get all roles """

        roles=Role.query.all()
        
        return roles


    @roles.marshal_with(roles_model)
    @roles.expect(roles_model)
    # @jwt_required()
    def post(self):
        """Create a new role"""

        data=request.get_json()

        new_role=Role(
            name=data.get('name')
          
        )

        new_role.save()

        return new_role,201



#retrieving a single role
@roles.route('/<int:id>')
class RoleResource(Resource):

    @roles.marshal_with(roles_model)
    def get(self,id):
        """Get a role by id """
        role=role.query.get_or_404(id)

        return role


    @roles.marshal_with(roles_model)
    @jwt_required()
    def put(self,id):
        """Update a role by id """
        

        role=role.query.get_or_404(id)

        data=request.get_json()
        name = data.get('name')

        role.update(name)

        return role


    @roles.marshal_with(roles_model)
    @jwt_required()
    def delete(self,id):
        """Delete a recipe by id """

        role=role.query.get_or_404(id)

        role.delete()

        return 
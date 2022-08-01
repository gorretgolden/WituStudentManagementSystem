

from flask_restx import Api, Resource, Namespace, fields
courses=Namespace('courses')

# upload_parser.add_argument('file', location='files',
#                            type=FileStorage, required=True)


# @courses.route('/upload/')
# @courses.expect(upload_parser)
# class Upload(Resource):
#     def post(self):
#         args = upload_parser.parse_args()
#         uploaded_file = args['file']  # This is FileStorage instance
#         url = do_something_with_file(uploaded_file)
#         return {'url': url}, 201
import unittest
from main import create_app
from config import TestConfig
from db import db


class APITestCase(unittest.TestCase):
    def setUp(self):
        self.app=create_app(TestConfig)

        self.client=self.app.test_client(self)

        with self.app.app_context():
            db.init_app(self.app)

            db.create_all()

    def test_signup(self):
        signup_response=self.client.post('/users/signup',
            json={
            "first_name":"testuser",
            "last_name":"testuser2",
            "email":"testuser@test.com",
            "contact":"07514758",
            "password":"password"
            }
        )

        status_code=signup_response.status_code

        self.assertEqual(status_code, 201)      



    def test_login(self):
        signup_response=self.client.post('/users/signup',
            json={
            "first_name":"testuser",
            "last_name":"testuser2",
            "email":"testuser@test.com",
            "contact":"07514758",
            "password":"password"
            }
        )

        login_response=self.client.post('/users/login',
            json={
            "email":"testuser@test.com",
            "password":"password"
            }
        )

        status_code=login_response.status_code
        #print(login_response.json)

        self.assertEqual(status_code, 200)      


   
    def test_get_all_users(self):
        """TEST GETTING ALL USERS"""
        response=self.client.get('/users/')

        # print(response.json)

        status_code=response.status_code

        self.assertEqual(status_code, 200)


    def test_get_one_user(self):
        id=1
        response=self.client.get(f'/users/{id}')

        status_code=response.status_code
        print(status_code)

        self.assertEqual(status_code, 200)    


    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()
            



if __name__ == '__main__':
    unittest.main()



  



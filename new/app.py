from flask import Flask, jsonify, request
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin
from models import db, Users
import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:''@localhost/pycrud'

SQLALCHENY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

CORS(app, supports_credentials=True)

db.init_app(app)

with app.app_context():
    db.create_all()

ma = Marshmallow(app)

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'email', 'mobile', 'date')

user_schema = UserSchema()
user_schema = UserSchema(many=True)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/users', methods=['GET'])
def listusers():
    all_users = Users.query.all()
    results = user_schema.dump(all_users)
    return jsonify(results)

@app.route('/userdetails/<id>' , methods= ['GET'])
def userdetail(id):
    user = Users.query.get(id)
    return user_schema.jsonify([user])

@app.route('/userupdate/<id>', methods=['PUT'] )
def userupdate(id):
    users = Users.query.get(id)

    name =  request.json['name']
    email = request.json['email']
    mobile = request.json['mobile']

    users.name =  name
    users.email = email
    users.mobile = mobile
    
    db.session.commit()
    return user_schema.jsonify([users])

@app.route('/userdelete/<id>' , methods=['DELETE'])
def userdelete(id):
    users = Users.query.get(id)
    db.session.delete(users)
    db.session.commit()
    return user_schema.jsonify([users])

@app.route('/newuser', methods=['POST'])
def newuser():
    name = request.json['name']
    email = request.json['email']
    mobile = request.json['mobile']

    print(name)
    print(email)
    print(mobile)

    users =  Users(name=name, email=email, mobile=mobile)

    db.session.add(users)
    db.session.commit()
    return user_schema.jsonify([users])

if __name__ == " __main__":
    app.run(debug=True)

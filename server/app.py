from flask import Flask, request, jsonify, session
from flask_restful import Resource
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import create_access_token, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.exc import IntegrityError
from models import User, Workout, Goal, Friendship
from config import db, app

# Routes

@app.before_request
def check_if_logged_in():
    open_access_list = [
        'signup',
        'login',
        'check_session',
        'register',
        'workouts',
        'goals',
        'friends',
    ]

    if (request.endpoint) not in open_access_list and (not session.get('user_id')):
        return {'error': '401 Unauthorized'}, 401


@app.route('/')
def index():
    return "welcome to the fitness tracker!"

@app.route('/signup', methods=['POST'])
def signup():
    request_json = request.get_json()

    username = request_json.get('username')
    password = request_json.get('password')
    email = request_json.get('email')

    new_user = User(username=username, email=email, password=password)

    db.session.add(new_user)

    try:
        db.session.commit()
    except IntegrityError:
        return {'error': 'Username or email already exists'}, 400

    session['user_id'] = new_user.id

    return new_user.to_dict(), 201
    
@app.route('/login', methods=['POST'])
def login():
    request_json = request.get_json()

    username = request_json.get('username')
    password = request_json.get('password')

    user = User.query.filter_by(username=username).first()

    if not user or not user.authenticate(password):
        return {'error': 'Invalid username or password'}, 401

    session['user_id'] = user.id

    return user.to_dict(), 200
        
@app.route('/logout', methods=['DELETE'])
def logout():
    session.clear()
    return {}, 204

@app.route('/check_session', methods=['GET'])
def check_session():
    user_id = session.get('user_id')

    if user_id:
        user = User.query.get(user_id)
        return user.to_dict(), 200
    else:
        return {}, 401


@app.route('/users', methods=['GET'])
def users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users]), 200


@app.route('/users/<int:id>', methods=['GET'])
def manage_user(id):
    user = User.query.get_or_404(id)
    return jsonify(user.to_dict()), 200


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'], method='sha256')
    new_user = User(username=data['username'], email=data['email'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully!"}), 201



@app.route('/workouts', methods=['GET', 'POST'])
def workouts():
    if request.method == 'POST':
        data = request.get_json()
        new_workout = Workout(type=data['type'], duration=data['duration'], calories_burned=data['calories_burned'], user_id=data['user_id'])
        db.session.add(new_workout)
        db.session.commit()
        return jsonify({"message": "Workout logged successfully!"}), 201
    else:
        workouts = Workout.query.all()
        return jsonify([workout.to_dict() for workout in workouts]), 200


@app.route('/workouts/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def manage_workout(id):
    workout = Workout.query.get_or_404(id)
    if request.method == 'GET':
        return jsonify(workout.to_dict()), 200
    elif request.method == 'PUT':
        data = request.get_json()
        workout.type = data['type']
        workout.duration = data['duration']
        workout.calories_burned = data['calories_burned']
        db.session.commit()
        return jsonify({"message": "Workout updated successfully!"}), 200
    elif request.method == 'DELETE':
        db.session.delete(workout)
        db.session.commit()
        return jsonify({"message": "Workout deleted successfully!"}), 200


@app.route('/goals', methods=['GET', 'POST'])
def goals():
    if request.method == 'POST':
        data = request.get_json()
        new_goal = Goal(description=data['description'], target_date=data['target_date'], user_id=data['user_id'])
        db.session.add(new_goal)
        db.session.commit()
        return jsonify({"message": "Goal set successfully!"}), 201
    else:
        goals = Goal.query.all()
        return jsonify([goal.to_dict() for goal in goals]), 200
    

@app.route('/goals/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def manage_goal(id):
    goal = Goal.query.get_or_404(id)
    if request.method == 'GET':
        return jsonify(goal.to_dict()), 200
    elif request.method == 'PUT':
        data = request.get_json()
        goal.description = data['description']
        goal.target_date = data['target_date']
        db.session.commit()
        return jsonify({"message": "Goal updated successfully!"}), 200
    elif request.method == 'DELETE':
        db.session.delete(goal)
        db.session.commit()
        return jsonify({"message": "Goal deleted successfully!"}), 200
    


@app.route('/friends', methods=['GET', 'POST'])
def friends():
    if request.method == 'POST':
        data = request.get_json()
        new_friendship = Friendship(user_id=data['user_id'], friend_id=data['friend_id'])
        db.session.add(new_friendship)
        db.session.commit()
        return jsonify({"message": "Friend added successfully!"}), 201
    else:
        friendships = Friendship.query.all()
        return jsonify([friendship.to_dict() for friendship in friendships]), 200
    

@app.route('/friends/<int:id>', methods=['GET', 'DELETE'])
def manage_friend(id):
    friendship = Friendship.query.get_or_404(id)
    if request.method == 'GET':
        return jsonify(friendship.to_dict()), 200
    elif request.method == 'DELETE':
        db.session.delete(friendship)
        db.session.commit()
        return jsonify({"message": "Friend removed successfully!"}), 200

if __name__ == '__main__':
    app.run(port=5555, debug=True)
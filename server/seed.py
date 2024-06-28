
from random import randint, choice as rc

from faker import Faker

# Local imports
from app import app
from models import db, User, Workout, Goal, Friendship

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")

        # Clear existing data
        User.query.delete()
        Workout.query.delete()
        Goal.query.delete()
        Friendship.query.delete()

        # Create users
        users = []
        for _ in range(10):
            user = User(
                username=fake.user_name(),
                email=fake.email(),
                password=fake.password()  # You might want to hash this password using user.set_password()
            )
            # user.set_password(user.password)  # Hash the password
            users.append(user)
        db.session.add_all(users)
        db.session.commit()

        # Create workouts
        workouts = []
        for _ in range(30):
            workout = Workout(
                type=rc(['Running', 'Cycling', 'Swimming', 'Yoga', 'Weightlifting']),
                duration=randint(20, 120),
                calories_burned=randint(100, 1000),
                description=fake.sentence(nb_words=6),
                username=rc(users).username
            )
            workouts.append(workout)
        db.session.add_all(workouts)
        db.session.commit()

        # Create goals
        goals = []
        for _ in range(20):
            goal = Goal(
                description=fake.sentence(nb_words=6),
                target_date=fake.date_this_year(),
                user_id=rc(users).id
            )
            goals.append(goal)
        db.session.add_all(goals)
        db.session.commit()

        # Create friendships
        friendships = []
        user_ids = [user.id for user in users]
        for _ in range(15):
            user_id = rc(user_ids)
            friend_id = rc([uid for uid in user_ids if uid != user_id])
            if not db.session.query(Friendship).filter_by(user_id=user_id, friend_id=friend_id).first():
                friendship = Friendship(
                    user_id=user_id,
                    friend_id=friend_id
                )
                friendships.append(friendship)
        db.session.add_all(friendships)
        db.session.commit()

        print("Seed complete!")

import GoalBox from './GoalsBox';

function UserGoals({user}) {
    if (user.workouts.length === 0) {
        return <p className="Loading-message">No workouts to display</p>;
    }

    function renderGoals() {
        return user.goals.map((goal) => {
            return (
                <GoalBox goal={goal} key={goal.id} />
            );
        });
    }

    return (
        <div>
            {renderGoals()}
        </div>
    )
}

export default UserGoals;
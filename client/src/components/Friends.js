import FriendBox from "./FriendBox";
import { useState, useEffect } from "react";


function Friends({ user }) {
    const [friendShips, setFriendShips] = useState();
    const [usersFriends, setUsersFriends] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5555/friends`)
            .then((res) => res.json())
            .then((data) => setFriendShips(data));
    }, []);

    function grabUsersFriends() {
        const usersFriends = friendShips.filter((friendShip) => {
            return friendShip.user_id === user.id;
        });
        setUsersFriends(usersFriends);
    }

    useEffect(() => {
        if (friendShips) {
            grabUsersFriends();
        }
    }, [friendShips]);

    console.log(usersFriends)
    
    if (!friendShips) {
        return <p className="Loading-message">Loading...</p>;
    }

    
    return (
        <div>
            <h1>Friends</h1>
            {usersFriends.map((friendShip) => (
                <FriendBox key={friendShip.id} friendShip={friendShip} />
            ))}
        </div>
    );
}

export default Friends;
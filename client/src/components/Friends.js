import FriendBox from "./FriendBox";
import { useState, useEffect } from "react";


function Friends() {
    const [friendShips, setFriendShips] = useState();

    useEffect(() => {
        fetch("http://localhost:5555/friends")
            .then((res) => res.json())
            .then((data) => setFriendShips(data));
    }, []);
    
    if (!friendShips) {
        return <p className="Loading-message">Loading...</p>;
    }

    
    return (
        <div>
            {friendShips.map((friendShip) => (
                <FriendBox key={friendShip.id} friendShip={friendShip}/>
            ))}
        </div>
    );
}

export default Friends;
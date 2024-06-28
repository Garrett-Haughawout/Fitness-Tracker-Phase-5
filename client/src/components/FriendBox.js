import { useState, useEffect } from 'react';

function FriendBox({ friendShip }) {
    return (
        <div>
            <h2>{friendShip.user.username}</h2>
            <p>{friendShip.friend.email}</p>
        </div>
    );
}

export default FriendBox;
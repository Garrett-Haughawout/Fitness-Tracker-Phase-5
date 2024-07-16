import { useState, useEffect } from 'react';



function OtherUsersProfile({ user }) {
    const [otherUser, setOtherUser] = useState(null);


    useEffect(() => {
        fetch('https://fitness-tracker-phase-5.onrender.com/users', {
            mode: 'no-cors',
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((user) => setOtherUser(user));
                }
            });
    }
    , []);


    return (
        <div>
            <h1>Other Users Profile</h1>
            <h2>{otherUser.username}</h2>
        </div>
    )
}


export default OtherUsersProfile;
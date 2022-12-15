import React, { useState, useContext } from 'react';
import { SocketContext } from '../socket';

export function UserList() {
    const socket = useContext(SocketContext);
    const hardcodedUsers = [
        {
            name: 'Desperate student',
        },
        {
            name: 'Other student',
        },
        {
            name: 'The Belgian Golum',
        },
    ];

    const [userList, setUserList] = useState(hardcodedUsers);
    socket.on('userUpdate', (users) => {
        setUserList(users);
    });
    return (
        <div>
            <h1>UserList</h1>
            {userList.map((user) => {
                return <h3>{user.name}</h3>;
            })}
        </div>
    );
}

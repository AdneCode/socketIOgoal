import React, { useState } from 'react';

export function UserList() {
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
    return (
        <div>
            <h1>UserList</h1>
            {userList.map((user) => {
                return <h3>{user.name}</h3>;
            })}
        </div>
    );
}

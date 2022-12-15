import { useState } from 'react';
import { Button } from './Button';
import { UserList } from './UserList';
import { Messages } from './Messages';

export function ChatPage() {
    const [message, setMessage] = useState('');
    return (
        <>
            <UserList />
            <Button message={message} />
            <input
                placeholder={'message'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Messages />
        </>
    );
}

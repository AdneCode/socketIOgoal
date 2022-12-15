import React, { useState } from 'react';

export function Messages() {
    const hardcodedMessages = [
        {
            name: 'Desperate student',
            text: 'Swen, wanna go for a cigarette?',
        },
        {
            name: 'Other student',
            text: 'Yeah Swen can I have a cigarette too...',
        },
        {
            name: 'The Belgian Golum',
            text: 'I am the suppliaah here, error error',
        },
    ];
    const [messages, setMessages] = useState(hardcodedMessages);
    return (
        <div>
            <h1>Messages</h1>
            {messages.map((message) => {
                return (
                    <h5>
                        {message.name}: {message.text}
                    </h5>
                );
            })}
        </div>
    );
}

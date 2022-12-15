import React from 'react';

export function Button(props) {
    const { message } = props;
    const postMessage = () => {
        console.log(message);
    };
    return <button onClick={() => postMessage()}>Post message</button>;
}

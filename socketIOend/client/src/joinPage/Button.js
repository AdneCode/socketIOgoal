import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Button(props) {
    //Name from useState
    const { name } = props;
    //useNavigate to change the page to the chatPage
    const navigate = useNavigate();
    //Onclick function
    const joinChat = () => {
        console.log(name);
        navigate('/chat');
    };
    return <button onClick={() => joinChat()}>Join chat</button>;
}

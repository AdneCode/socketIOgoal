import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../socket';

export function Button(props) {
    const socket = useContext(SocketContext);
    //Name from useState
    const { name } = props;
    //useNavigate to change the page to the chatPage
    const navigate = useNavigate();
    //Onclick function
    const joinChat = () => {
        socket.emit('joinChat', name);
        navigate('/chat');
    };
    return <button onClick={() => joinChat()}>Join chat</button>;
}

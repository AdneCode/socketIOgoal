import { useContext } from 'react';
import { SocketContext } from '../socket';

export function Button(props) {
    const { message } = props;
    const socket = useContext(SocketContext);
    const postMessage = () => {
        socket.emit('postMessage', message);
    };
    return <button onClick={() => postMessage()}>Post message</button>;
}

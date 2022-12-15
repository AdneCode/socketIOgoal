import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ChatPage } from './chatPage';
import { JoinPage } from './joinPage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<JoinPage />} />
                <Route path="/chat" element={<ChatPage />} />
            </Routes>
        </div>
    );
}

export default App;

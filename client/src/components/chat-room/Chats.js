import React, { useRef, useState, useEffect } from 'react';
import '../chat-room/chats.css';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../chat-room/firebase';
import { useAuth } from '../chat-room/contexts/AuthContext';
import axios from 'axios';
import DevLogo from './logo/logo.png';

const Chats = () => {
    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", { type: 'image/jpeg' })
    }

    useEffect(() => {
        if(!user){
            history.push('/');

            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "842a5397-aeb0-40f0-ba57-430dc816aeee",
                "user-name": user.email,
                "user-secret": user.uid,
            } 
        })
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
            let formData = new FormData();
            formData.append('email', user.email);
            formData.append('username', user.email);
            formData.append('secret', user.uid);

            getFile(user.photoURL)
                .then((avatar) => {
                    formData.append('avatar', avatar, avatar.name)

                    axios.post('https://api.chatengine.io/users', 
                    formData,
                    { headers: { "private-key":  "fb7a86e8-3dda-4301-93a4-3f9a45aedff6"} }
                    )
                    .then(() => setLoading(false))
                    .catch((error) => console.log(error))
                })
        })
    }, [user, history]);

    if(!user || loading) return 'Loading...'

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    DevChat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectID="842a5397-aeb0-40f0-ba57-430dc816aeee"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    )
};

export default Chats;
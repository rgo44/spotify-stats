import React from 'react';

import './Login.css'

const clientId = process.env.REACT_APP_CLIENT_ID; 
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scope = 'user-top-read%20playlist-modify-public';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id='+clientId+'&response_type=code&redirect_uri='+redirectUri+'&scope='+scope;

const Login = () => {
    
    return (
        <div className="loginContainer">
            <a className="login" href={AUTH_URL}>
                Login with Spotify
            </a>
        </div>
    )
}

export default Login;
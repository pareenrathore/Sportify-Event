import React from 'react';
import './Login.css';
import Sportify from './Sportify.png';

const Login = () =>{
    return(
        <main>
            <div class="login">
                <div class="sportify"><img src={Sportify} alt="" srcset="" class="idk"/></div>
                <div class="username">
                    <h4>Username:</h4>
                    <input type="email" name="" id="idpass" />
                </div>
                <div class="password">
                    <h4>Password:</h4>
                    <input type="password" name="" id="idpass" />
                </div>
                <button type="submit" id="login">Login</button>
            </div>
        </main>
    );
};

export default Login;

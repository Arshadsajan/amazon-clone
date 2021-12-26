import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from '../database/firebase';
import { Public } from '@material-ui/icons';
import { unsupportedProp } from '@material-ui/core';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                history.push('/')
            })
            .catch(err => alert(err))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                //return a object of created user.
                console.log(user)
                if (user)
                    history.push('/')
            })
            .catch(err => alert(err));
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazon"
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form onSubmit={signIn}>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &amp; Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login









// Public String checkBraces(String input1) throws unsupportedOperationException{

//     int count1 = 0, count2=0;
//     for(int i=0;i<input1.length();i++){
//         if(input1.charAt(i)=='{')
//         count1++;
//         if(input1.charAt(i)=='}')
//         count2++;

//     }
//     if(count1==count2)
//         return "CORRECT";
//     return "ERROR"
// }


// public int[] arrange(int n, int[] arr){



//     //last line
//     return arr;
// }
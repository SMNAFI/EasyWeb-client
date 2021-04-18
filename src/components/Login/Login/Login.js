import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import google from '../../../images/google.png';
import { firebaseConfig } from '../firebaseConfig/firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleLogin = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const { displayName, email, photoURL } = user;
                const newUser = { userName: displayName, email, photoURL };
                setLoggedInUser(newUser);
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="bg-brand vh-100 text-white d-flex align-items-center justify-content-center">
            <div>
                <h3 className="text-center">Login With</h3>
                <div className="d-flex justify-content-center">
                    <button className="login-btn" onClick={googleLogin}>
                        <img src={google} alt="" /> <span className="mx-5">Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
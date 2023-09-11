import React from "react";
import './Homepage.css';
import {useNavigate} from 'react-router-dom';


export default function HomePage() {
    const navigate = useNavigate();
    
    const navigateToSignUp = () => {
        navigate('/SignUp');
    };

    const navigateToLogin = () => {
        navigate('/Login');
    };

    return(
    <>
        <img className="display" src="Cool_Car_pic.jpg" alt="What's up dude?"></img>
        <center><h1>Manage and Plan Your Projects the Right Way</h1></center>
        <br></br>
        <center><p>Keep track of your software project requirements and time commitments!</p></center>
        <br></br>
        <br></br>
        <body class="flex-parent jc-center">
            <button class="button" onClick={navigateToSignUp}>Sign Up</button>
            <button class="button" onClick={navigateToLogin}>Login</button>
        </body>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </>
    )
}
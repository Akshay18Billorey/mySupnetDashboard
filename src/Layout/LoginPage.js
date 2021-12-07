import React from 'react'
import './Login.css';
import Dashboard from './Dashboard';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Modal from 'react-modal';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import reactDom from 'react-dom';
// import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function LoginPage() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [token, setToken] = useState();
    const setForm = (event) => {
        let { name, value } = event.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const demotoken = "asdfghjkl";
        setToken(demotoken);
    };
    console.log(token, "token");

    if (token) {
        window.localStorage.setItem("token", token);
        ReactDOM.render(
            <BrowserRouter>
                <Switch>
                    {/* <Route path="/App" component={App} /> */}
                    <Route path="/dashboard" component={Dashboard} />
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </BrowserRouter>,
            document.getElementById("root")
        );
    }
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="loginpage">
            <Container>
                <br />
                <Row>
                    <Col md={10}></Col>
                    <Col md={2}><Button style={{ width: "80%", backgroundColor: "white", borderRadius: "25px" }} onClick={openModal}>Login</Button></Col>
                </Row>
            </Container>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                {/* <button onClick={closeModal}>*</button> */}
                <div><h4 style={{ textAlign: "center" }}>Please Log In</h4></div>
                <form className="formParent">
                    <label>
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter User Name"
                            onChange={(e) => setForm(e)}
                        />
                    </label>
                    <label>
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={(e) => setForm(e)}
                        />
                    </label>
                    <div>
                        <button onClick={(e) => handleSubmit(e)}>Submit</button>
                    </div>
                </form>
            </Modal>
            {/* <div className="login-wrapper">
                <h1>Please Log In</h1>
                <form className="formParent">
                    <label>
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter User Name"
                            onChange={(e) => setForm(e)}
                        />
                    </label>
                    <label>
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={(e) => setForm(e)}
                        />
                    </label>
                    <div>
                        <button onClick={(e) => handleSubmit(e)}>Submit</button>
                    </div>
                </form>
            </div> */}
        </div>
    )
}

export default LoginPage

// import React, { useState } from "react";
// // import axios from "axios";
// // import PropTypes from 'prop-types';
// // import './login.css'
// import './Login.css';
// import Admin from "layouts/Admin.js";
// // import LoginPng from "../assets/img/login.png"
// import RTL from "layouts/RTL.js";
// import ReactDOM from "react-dom";
// import { api } from "../config/index";

// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


// export default function Login() {
//     const [loginData, setLoginData] = useState({
//         email: "",
//         password: "",
//     });
//     const [token, setToken] = useState();

//     const setForm = (event) => {
//         let { name, value } = event.target;
//         setLoginData({
//             ...loginData,
//             [name]: value,
//         });
//     };


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // if (formErrorValidation()) {
//         api
//             .post("/auth/login", loginData)
//             .then((response) => {
//                 if (response.data.status === "success") {
//                     setToken(response.data.data.token)
//                 }
//                 console.log(response)
//             })
//             .catch((error) => console.log(error.response.data.message));
//         // }
//     };
//     console.log(token, "token");
//     if (token) {
//         window.localStorage.setItem("token", token);
//         ReactDOM.render(
//             <BrowserRouter>
//                 <Switch>
//                     {/* <Route path="/App" component={App} /> */}
//                     <Route path="/admin" component={Admin} />
//                     <Route path="/rtl" component={RTL} />
//                     <Redirect from="/" to="/admin" />
//                 </Switch>
//             </BrowserRouter>,
//             document.getElementById("root")
//         );
//     }
//     return (
//         <div className="login-wrapper">
//             <h1>Please Log In</h1>
//             {/* <img className="ImageLogin" src={LoginPng} alt="LoginPng" /> */}
//             <form className="formParent">
//                 <label>
//                     <p>Email</p>
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Enter User Name"
//                         onChange={(e) => setForm(e)}
//                     />
//                 </label>
//                 <label>
//                     <p>Password</p>
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Enter Password"
//                         onChange={(e) => setForm(e)}
//                     />
//                 </label>
//                 <div>
//                     <button onClick={(e) => handleSubmit(e)}>Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// }
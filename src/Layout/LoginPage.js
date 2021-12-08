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
import { Form } from 'react-bootstrap';

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
// import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
const customStyles = {
    content: {
        top: '15%',
        right: '3%',
        left: 'auto',
        bottom: 'auto',
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)',
        // top: '50%',
        // left: '50%',
        // right: 'auto',
        // bottom: 'auto',
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)',
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
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    const [values, setValues] = React.useState({
        password: "",
        email: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div className="loginpage">
            <Container>
                <br />
                <Row>
                    <Col md={10}></Col>
                    <Col md={2}><Button style={{ width: "80%", backgroundColor: "white", borderRadius: "25px" }} onClick={openModal}>Login</Button></Col>
                </Row>

            </Container>
            {/* <Container className="rounded" style={{ width: "20%", backgroundColor: "white" }}>
                <div>
                    <Row>
                        <Form>
                            <div className="form__group field">
                                <input type="input" className="form__field" placeholder="Email" name="Email" id='name' required />
                                <label for="Email" className="form__label">Email</label>
                            </div>
                            <div className="form__group field">
                                <input type="input" className="form__field" placeholder="Password" name="Password" id='name' required />
                                <label for="Password" className="form__label">Password</label>
                            </div>
                            <div className="form__group field">
                                <Row>
                                    <Col>
                                        <label style={{ color: "blue", fontSize: "10px" }}>
                                            <input type="checkbox" />
                                            keep me logged in
                                        </label>
                                    </Col>
                                    <Col style={{ textAlign: "right" }}>
                                        <small style={{ color: "blue", fontSize: "10px" }}>Forgot Password?</small>
                                    </Col>
                                </Row>
                            </div>
                            <div className="form__group field" style={{ textAlign: "center" }}>
                                <Button style={{
                                    height: "35px",
                                    width: "70%",
                                    padding: "5px",
                                    backgroundColor: "green",
                                    border: "1px solid green",
                                    borderradius: "4px",
                                    fontWeight: "600",
                                    color: "white",
                                }}>LOG IN</Button>
                            </div>
                        </Form>
                    </Row>
                    <br />
                </div>
            </Container> */}
            {/* <button onClick={openModal}>Open Modal</button> */}
            {/* 
            <div
                style={{
                    marginLeft: "30%",
                }}
            >

                <InputLabel htmlFor="standard-adornment-password">
                    Password
                </InputLabel>
                <Input
                    type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={values.password}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </div> */}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                <div className="rounded" style={{ width: "220px", backgroundColor: "white" }}>
                    <Row>
                        <Form>
                            <div>
                                <div className="form__group field">
                                    <InputLabel>
                                        Email
                                    </InputLabel>
                                    <Input
                                        type="text"
                                        placeholder="your email"
                                    />
                                </div>
                                <div className="form__group field">
                                    <InputLabel htmlFor="standard-adornment-password">
                                        Password
                                    </InputLabel>
                                    <Input
                                        type={values.showPassword ? "text" : "password"}
                                        onChange={handlePasswordChange("password")}
                                        placeholder="your password"
                                        value={values.password}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </div>
                            </div>
                            {/* <div className="form__group field">
                                <input type="input" className="form__field" placeholder="Email" name="Email" id='Email' required onChange={(e) => setForm(e)} />
                                <label for="Email" className="form__label">Email</label>
                            </div>
                            <div className="form__group field">
                                <input type="password" className="form__field" placeholder="Password" name="Password" id='Password' required onChange={(e) => setForm(e)} />
                                <label for="Password" className="form__label">Password</label>
                            </div> */}
                            <div className="form__group field">
                                <Row>
                                    <Col>
                                        <label style={{ color: "blue", fontSize: "10px" }}>
                                            <input type="checkbox" />
                                            keep me logged in
                                        </label>
                                    </Col>
                                    <Col style={{ textAlign: "right" }}>
                                        <small style={{ color: "blue", fontSize: "10px" }}>Forgot Password?</small>
                                    </Col>
                                </Row>
                            </div>
                            <div className="form__group field" style={{ textAlign: "center" }}>
                                <Button style={{
                                    height: "35px",
                                    width: "70%",
                                    padding: "5px",
                                    backgroundColor: "green",
                                    border: "1px solid green",
                                    borderradius: "4px",
                                    fontWeight: "600",
                                    color: "white",
                                }} onClick={(e) => handleSubmit(e)}>LOG IN</Button>
                            </div>
                        </Form>
                    </Row>
                    <br />
                </div>
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
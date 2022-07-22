import React, { useState } from 'react';
import FormControl from "../components/FormControl";
import Button from "../components/shared/Button";
import Spacing from "../components/shared/Spacing";
import './../assets/css/login.css'

function Login () {

    function handleSubmit (e) {
        e.preventDefault()
        return
    }

    return (
        <main className="login">
            <Spacing />
            <div className="tcl-container">
                <div className="tcl-row">
                    <div className="tcl-col-12 tcl-col-sm-6 block-center">
                        <h1 className="form-title text-center">Login</h1>
                        <div className="form-login-register">
                            <form onSubmit={ () => handleSubmit() } method="POST" >
                                <FormControl label="Username" type="text" placeholder="Enter Username ..." name="username" />
                                <FormControl label="Password" type="password" placeholder="Enter Password ..." name="password" />
                                <div className="d-flex tcl-jc-between tcl-ais-center">
                                    <Button type="primary" size="large">Submit</Button>
                                    <Button href="register.html" as="a">Regiter</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Spacing />
        </main>
    );
}

export default Login
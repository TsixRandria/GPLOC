import React, { Component } from 'react';
import './Style.css'


 class Login extends Component {
    render() {
        return (
            <>
                <main class="login-body">
                    <form class="form-default" action="login-bg.mp4" method="POST">
                        
                            <div class="login-form">

                                <div class="logo-login">
                                    <a href="index.html"></a>
                                </div>
                                <h2>Login Here</h2>
                                <div class="form-input">
                                    <label for="name">Email</label>
                                    <input  type="email" name="email" placeholder="Email"/>
                                </div>
                                <div class="form-input">
                                    <label for="name">Password</label>
                                    <input type="password" name="password" placeholder="Password" />
                                </div>
                                <div class="form-input pt-30">
                                    <input type="submit" name="submit" value="login" />
                                </div>
                                

                                <a href="#" class="forget">Forget Password</a>

                                <a href="register.html" class="registration">Registration</a>
                            </div>
                        </form>

                    </main>
            </>
        )
    }
}
export default Login;
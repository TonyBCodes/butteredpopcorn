import React, { Component } from "react";
import API from "../utils/API";

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.email && this.state.password) {
            API.loginUser({
                email: this.state.email,
                password: this.state.password
            }).then(res => {
                // console.log(res);
                this.props.history.push("/");
            })
            .catch(err => console.log(err));
        };
    };

    render() {
        return (
            <div>
                <form action="/login" method="post">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={this.state.value} onChange={this.handleInputChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
                </form>
                <div>
                    <h4>Don't have an account? <a href="/register">Create one here.</a></h4>
                </div>
            </div>
        )
    }
}

export default Login;
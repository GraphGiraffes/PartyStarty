import React from 'react';
import ReactDOM from 'react-dom';
//import styles from './Sign.css';

var axios = require('axios');

class SignIn extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			username: "",
			password: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUserInput = this.handleUserInput.bind(this);
		this.handlePasswordInput = this.handlePasswordInput.bind(this);
	}

	handleSubmit(){
		axios.post('/signin', {username: this.state.username, password: this.state.password})
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		})
	}

	handleUserInput(e){
		this.setState({username: e.target.value});
	}

	handlePasswordInput(e){
		this.setState({password: e.target.value});
	}

	render(){
		return (
			<div>
				<div className="container">
				<form onSubmit={this.handleSubmit}>
					<div className = "form-input">
					<input onChange={this.handleUserInput} type="text"name ="username" placeholder="Username" />
					<input onChange={this.handlePasswordInput} type="password" name = "password" placeholder="Password" />
					</div>
					<input type="submit" value="Sigin" name="submit" value="Sign In"/>
				</form>
				<button>Sign Up</button>
				<button>Forget Password?</button>
				</div>
			</div>
		)
	}
}

export default SignIn; 
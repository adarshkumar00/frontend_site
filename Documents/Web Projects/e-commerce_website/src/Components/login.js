import React , {Component} from 'react';
// import { FormControl, FormLabel, InputLabel, Input, Button } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';
import * as Icons from 'react-feather';
import * as fonts from 'react-icons/fa';
import 'font-awesome/css/font-awesome.css';
class Login extends Component
{
	constructor()
	{
		super();
		this.state = {container_class : "container",
						password_states:{visibility:"hide",type:"password"},
						username : "",
						email:"",
						password:""
					}
	}
	transition = ()=>{
		if (this.state.container_class === "container")
		{
			this.setState({container_class:"container right-panel-active"});
		}
		else
		{
			this.setState({container_class:"container"});
		}

	}
	togglePasswordVisibility=()=>{
		if (this.state.password_states.visibility.localeCompare('hide')===0)
		{
			this.setState({password_states:{...this.state.password_states,visibility:'show',type:'text'}});
		}
		else
		{
			this.setState({password_states:{...this.state.password_states,visibility:'hide',type:'password'}});
		}
		// console.log(this.state.password_states);
	}

	handleSignIn = (e)=>{
		// console.log(this.signinemail.value,this.signinpassword.value)
		this.setState({
			email:this.signinemail.value,
			password:this.signinpassword.value
		});
		fetch("https://localhost:3001/login" , {
			method:"post",
			headers:{"content-type":"application/json"},
			body:JSON.stringify({
				email:this.signinemail.value,
				password:this.signinpassword.value
			})
		})
	}
	handleSignUp = ()=>{
		// console.log(this.signupusername.value , this.signupemail.value,this.signuppassword.value)
		this.setState({
			username : this.signupusername.value,
			email:this.signupemail.value,
			password:this.signuppassword.value
		});
	}
	
	render()
	{
		const {container_class} = this.state;
		return(
			<div>
				<div className={container_class} id="container">
					<div className="form-container sign-up-container">
						<form >
							<h1>Create Account</h1>
							<div className="social-container">
								<a href="https://www.facebook.com" className="social "><Icons.Facebook/></a>
								<a href="https://www.twitter.com" className="social"><Icons.Twitter/></a>
								<a href="https://www.google.com" className="social"><fonts.FaGoogle /></a>
							</div>
							<span>or use your email for registration</span>
							<input type="text" ref = {name => this.signupusername = name} placeholder="Name" />
							<input type="email" ref = {email => this.signupemail = email} placeholder="Email" />
							<input type={this.state.password_states.type}  ref = {password => this.signuppassword = password} placeholder="Password" />
							<i style={{cursor:"pointer"}} onClick={this.togglePasswordVisibility}>
								{this.state.password_states.visibility.localeCompare('hide')===0?<fonts.FaEye/>:<fonts.FaEyeSlash/>}
							</i>
							<button onClick = {this.handleSignUp}>Sign Up</button>
						</form>
					</div>
					<div className="form-container sign-in-container">
						<form action='#'>
							<h1>Sign in</h1>
							<div className="social-container">
								<a href="https://www.facebook.com" className="social "><Icons.Facebook/></a>
								<a href="https://www.twitter.com" className="social"><Icons.Twitter/></a>
								<a href="https://www.google.com" className="social"><fonts.FaGoogle /></a>
							</div>
							<span>or use your account</span>
							<input type="email" ref = {email => this.signinemail = email} placeholder="Email" />
							<input type={this.state.password_states.type} ref = {password => this.signinpassword = password} placeholder="Password"/>
							<i style={{cursor:"pointer"}} onClick={this.togglePasswordVisibility}>
								{this.state.password_states.visibility.localeCompare('hide')===0?<fonts.FaEye/>:<fonts.FaEyeSlash/>}
							</i>

							<a href="#">Forgot your password?</a>
							<button onClick = {this.handleSignIn}  >Sign In</button>
						</form>
					</div>
					<div className="overlay-container">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
								<h1>Welcome Back!</h1>
								<p>To keep connected with us please login with your personal info</p>
								<button onClick = {this.transition} className="ghost" id="signIn">Sign In</button>
							</div>
							<div className="overlay-panel overlay-right">
								<h1>Hello, Friend!</h1>
								<p>Enter your personal details and start journey with us</p>
								<button onClick = {this.transition} className="ghost" id="signUp">Sign Up</button>
							</div>
						</div>
					</div>
				</div>

				<footer>
					<p>
						
					</p>
				</footer>
			</div>
			);
	}
}
export default Login;
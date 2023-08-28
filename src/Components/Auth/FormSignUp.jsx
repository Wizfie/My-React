import React from "react";
import InputText from "../Component/InputText";
import Logo from "../../assets/logo.png";
import MyButton from "../Component/MyButton";

const FormSignUp = () => {
	const Clicked = () => {
		return alert("Register");
	};
	return (
		<>
			<div className="login-container">
				<div className="tittle-sign-up">Register</div>
				<img src={Logo} className="logo"></img>
				<InputText label="Username" type="text" placeholder="username" />
				<InputText label="Email" type="email" placeholder="example@mail.com" />
				<InputText label="Password" type="password" placeholder="*********" />
				<MyButton
					clicked={Clicked}
					className="btn btn-active btn-warning"
					name="Sign Up"
					id="btn-sign-up"
				/>
			</div>
		</>
	);
};

export default FormSignUp;

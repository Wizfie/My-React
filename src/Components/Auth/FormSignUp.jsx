import React, { useState } from "react";
import InputText from "../Component/InputText";
import Logo from "../../assets/logo.png";
import MyButton from "../Component/MyButton";
import axios from "axios";

const FormSignUp = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChanger = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		// console.log("Register Success");
		// console.log(formData);

		try {
			const data = JSON.stringify(formData);
			const headers = {
				"Content-Type": "application/json",
			};

			const response = await axios.post(
				"http://localhost:8080/api/users",
				data,
				headers
			);
			if (response.data === 200) {
				alert("OKE");
				console.log("Register Success");
				console.log("Data yang dikirim:", formData);
				history.push("/");
			} else {
				console.log("Register Fail");
			}
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="login-container">
					<div className="tittle-sign-up">Register</div>
					<img src={Logo} className="logo" alt="Logo" />
					<InputText
						label="Username"
						value={formData.name}
						type="text"
						name="name"
						onChange={handleChanger}
						placeholder="username"
					/>
					<InputText
						label="Email"
						value={formData.email}
						type="email"
						name="email"
						onChange={handleChanger}
						placeholder="example@mail.com"
					/>
					<InputText
						label="Password"
						value={formData.password}
						type="password"
						name="password"
						onChange={handleChanger}
						placeholder="*********"
					/>
					<MyButton
						type="submit"
						className="btn btn-active btn-warning"
						name="Sign Up"
						id="btn-sign-up"
					/>
				</div>
			</form>
		</>
	);
};

export default FormSignUp;

import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useValidateUserCredentials from "../costum_hooks/useValidateUserCredentials";
import "./loginStyle.css";
const LoginComp = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState();
	const nav = useNavigate();
	const ValidateUserCredentials = useValidateUserCredentials();

	const onChangeEmail = useCallback(
		(e) => {
			if (e.target.value) {
				setEmail(e.target.value);
			}
		},
		[setEmail]
	);

	const onChangePassword = useCallback(
		(e) => {
			if (e.target.value.length > 3) {
				setPassword(e.target.value);
			}
		},
		[setPassword]
	);

	const onLogin = useCallback(() => {
		ValidateUserCredentials(email, password);
		nav("/");
	}, [ValidateUserCredentials, email, nav, password]);

	return (
		<div className="loginBox">
			Email &nbsp;
			<input
				type="text"
				placeholder="Email"
				onChange={(e) => onChangeEmail(e)}
			/>
			<br />
			Password &nbsp;
			<input
				type="password"
				onChange={(e) => onChangePassword(e)}
				placeholder="Password"
			/>
			<button onClick={() => onLogin()}>Login</button>
			<Link to="/sign_up">Sign up</Link>
		</div>
	);
};

export default LoginComp;

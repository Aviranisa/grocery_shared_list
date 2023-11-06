import { useCallback, useState } from "react";
import "./loginStyle.css";
import useSignNewUser from "../costum_hooks/useSignNewUser";
import { Link, useNavigate } from "react-router-dom";
const SignUpComp = ({ setUser }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [fullName, setFullName] = useState();
	const [imageUrl, setImgUrl] = useState();
	const navigate = useNavigate();
	const signNewUser = useSignNewUser();

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

	const onChangeFullName = useCallback(
		(e) => {
			if (e.target.value.length > 1) {
				setFullName(e.target.value);
			}
		},
		[setFullName]
	);

	const onChangeImgUrl = useCallback(
		(e) => {
			if (e.target.value.length > 1) {
				setImgUrl(e.target.value);
			}
		},
		[setImgUrl]
	);

	const onSignUp = useCallback(() => {
		signNewUser(email, password, fullName, imageUrl, setUser);
		navigate("/");
	}, [email, fullName, navigate, password, setUser, signNewUser, imageUrl]);

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
				type="text"
				onChange={(e) => onChangePassword(e)}
				placeholder="Password"
			/>
			<br />
			Full name &nbsp;
			<input
				type="text"
				onChange={(e) => onChangeFullName(e)}
				placeholder="your name here"
			/>
			Image URL &nbsp;
			<input
				type="text"
				onChange={(e) => onChangeImgUrl(e)}
				placeholder="image URL"
			/>
			<button onClick={() => onSignUp()}>Sign up</button>
			<Link to="/login">Login</Link>
		</div>
	);
};

export default SignUpComp;

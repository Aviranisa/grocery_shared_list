import "./App.css";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import useValidateUserByToken from "../costum_hooks/useValidateUserByToken";
import LoginComp from "../login_comp/LoginComp";
import ListsConnector from "../lists_comp/listsConnector";
import SignUpComp from "../sign_up_comp/signUpConnector";
import ListComp from "../list_comp/ListComp";
import UserTabComp from "../user_tab_comp/userTabComp";
import { useSelector } from "react-redux";

function App() {
	const [cookies, setCookie, removeCookie] = useCookies(["webapp_token"]);
	const currentUser = useSelector((state) => state.userReducer);
	const ValidateUserByToken = useValidateUserByToken(cookies.webapp_token);

	useEffect(() => {
		if (!currentUser && cookies.webapp_token) {
			ValidateUserByToken();
		}
	}, [currentUser, ValidateUserByToken, cookies.webapp_token]);
	return currentUser ? (
		<Routes>
			<Route path="/lists/:listId" element={<ListComp />}>
				<Route index element={<UserTabComp />} />
			</Route>
			<Route path="/lists" element={<ListsConnector />} />
			<Route path="*" element={<Navigate to="/lists" />} />
		</Routes>
	) : (
		<Routes>
			<Route path="/sign_up" element={<SignUpComp />} />
			<Route path="/" element={<LoginComp />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}

export default App;

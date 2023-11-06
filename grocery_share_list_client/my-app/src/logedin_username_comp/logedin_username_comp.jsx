import { useSelector } from "react-redux";
const LogedinUusernameComp = () => {
	const username = useSelector((state) => state.userReducer.name);
	return <div className="">Welcome {username}</div>;
};

export default LogedinUusernameComp;

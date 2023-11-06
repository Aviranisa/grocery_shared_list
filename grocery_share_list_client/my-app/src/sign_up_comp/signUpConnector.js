import SignUpComp from "./signUpComp";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setUser } from "../redux/actions/userActions";

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			setUser,
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComp);

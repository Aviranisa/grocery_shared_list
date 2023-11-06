import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AddNewListComp from "./addNewListComp";

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewListComp);

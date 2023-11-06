import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ListTabComp from "./ListTabComp";
import { setCurrentListId } from "../redux/actions/listsActions";

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setCurrentListId }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTabComp);

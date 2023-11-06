import ListComp from "./ListsComp";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setLists } from "../redux/actions/listsActions";
import { getLists } from "../redux/selectors/listsSelectors";

const mapStateToProps = (state) => {
	return { lists: getLists(state) };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			setLists,
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComp);

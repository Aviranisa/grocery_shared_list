import "./PriceAndBudget.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import useEditListById from "../costum_hooks/useEditListById.js";
import lodash from "lodash";

const PriceAndBudgetComp = ({ editorsIdsArray }) => {
	const [budgetToEdit, setBudgetToEdit] = useState(null);
	const [isLoad, setIsLoad] = useState(false);
	const [isEditMod, setIsEditMod] = useState(false);
	const { id, price, percentage_price_from_budget, budget } = useSelector(
		(state) => state.listsReducer?.fullListDetails
	);
	const editListById = useEditListById();

	const validateNumber = (budgetToEditValue) => {
		const valueToInteger = parseInt(budgetToEditValue);
		if (lodash.isNumber(valueToInteger) && !isNaN(valueToInteger)) {
			setBudgetToEdit({ ...budgetToEdit, budget: valueToInteger });
		}
	};

	const editBudgetOnClick = () => {
		editListById(id, budgetToEdit).then(() => setIsEditMod(false));
	};

	const cancelEditBudget = () => {
		setBudgetToEdit(null);
		setIsEditMod(false);
	};

	if (isLoad) {
		return null;
	}
	return (
		<div>
			<h4>Price & Budget</h4>
			<div>percentage_price_from_budget: {percentage_price_from_budget}</div>
			{!isEditMod ? (
				<div>
					<span>Budget: {budget}</span>
					<button onClick={() => setIsEditMod(true)}>edit</button>
				</div>
			) : (
				<div>
					<input
						placeholder={budget > 0 ? budget : "Budget:"}
						onChange={(e) => {
							validateNumber(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							editBudgetOnClick();
						}}
					>
						Save
					</button>
					<button
						onClick={() => {
							cancelEditBudget();
						}}
					>
						Cancel
					</button>
				</div>
			)}
			<div>Price: {price}</div>
		</div>
	);
};

export default PriceAndBudgetComp;

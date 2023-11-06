import "./listStyle.css";
import useFetchListById from "../costum_hooks/useFetchListsById";
import UserTabComp from "../user_tab_comp/userTabComp";
import PriceAndBudgetComp from "../price_and_budget_comp/PriceAndBudgetComp";
import ProductsContinerComp from "../products_continer_comp/ProductsContinerComp";
import React, { useEffect, useMemo, useState } from "react";
import usePrevious from "../costum_hooks/usePrevious";
import { useSelector } from "react-redux";

const ListComp = () => {
	const [currentListId] = useState(document.location.pathname.substring(7));
	const [isLoad, setIsLoad] = useState(false);
	const fetchList = useFetchListById(currentListId);
	const currentList = useSelector(
		(state) => state.listsReducer.fullListDetails
	);
	const prevListId = usePrevious(currentListId);

	useEffect(() => {
		if (currentListId !== prevListId) {
			setIsLoad(true);
			fetchList().then(() => {
				setIsLoad(false);
			});
		}
	}, [currentList, currentListId, fetchList, isLoad, prevListId]);

	const renderListDetails = useMemo(() => {
		if (!currentList) {
			return null;
		}
		return (
			<>
				<h2 className="listName">{currentList.name}</h2>
				<div className="listUsers">
					<UserTabComp
						creatorId={currentList.creatorId}
						editorsIdsArray={currentList.editorsId}
						adminsIdsArray={currentList.adminsIds}
					/>
				</div>
				<div className="listPriceBudget">
					<PriceAndBudgetComp />
				</div>
				<div className="listProducts">
					<h4>Products:</h4>
					<ProductsContinerComp productsIds={currentList.productsApiKeys} />
				</div>
			</>
		);
	}, [currentList]);

	return (
		<div className="listContainer">
			{isLoad ? <div>loading...</div> : renderListDetails}
		</div>
	);
};

export default ListComp;

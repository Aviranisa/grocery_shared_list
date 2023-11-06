import "./listsStyle.css";
import { useEffect } from "react";
import useFetchLists from "../costum_hooks/useFetchLists";
import ListTabComp from "../list_tab_comp/ListTabComp";
import AddNewListComp from "../add_new_list_comp/addNewListComp";
import LogedinUusernameComp from "../logedin_username_comp/logedin_username_comp";

const ListsComp = ({ setLists, lists }) => {
	const FetchLists = useFetchLists(setLists);

	useEffect(() => {
		FetchLists();
	}, []);

	return (
		<div className="listContainer">
			<LogedinUusernameComp />
			<div>{<AddNewListComp />}</div>
			<div className="ListsComp">
				{lists &&
					Object.values(lists).map((list) => {
						if (list) {
							return (
								<ListTabComp
									key={list.id}
									listId={list.id}
									list_name={list.name}
									percentage_price_from_budget={
										list.percentage_price_from_budget || 0
									}
									num_items={list.productsLength || 0}
								/>
							);
						}
					})}
			</div>
		</div>
	);
};

export default ListsComp;

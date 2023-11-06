import axios from "axios";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const statusOk = 200;
const useSearchRamiLevyProducts = () => {
	const fetchProductsRamiLevy = useCallback((searchKey) => {
		if (!searchKey) {
			return;
		}
		return axios
			.post(`/api/rami_levy/search_products`, { searchKey })
			.then((products) => {
				if (products.status === statusOk) {
					// callback(products.data);
					return products.data;
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	return fetchProductsRamiLevy;
};
export default useSearchRamiLevyProducts;

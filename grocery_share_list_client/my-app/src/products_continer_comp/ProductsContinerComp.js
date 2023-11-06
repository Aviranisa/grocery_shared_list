import "./productsContinerStayl.css";
import React, { useEffect, useMemo, useState } from "react";
import SearchProductComp from "../search_product_comp/searchProductComp";

const ProductsContinerComp = (productsIds) => {
	const [isLoad, setIsLoad] = useState(false);

	const renderListDetails = useMemo(() => {
		if (!productsIds) {
			return null;
		}
		return <SearchProductComp />;
	}, [productsIds]);

	return <div>{isLoad ? <div>loading...</div> : renderListDetails}</div>;
};

export default ProductsContinerComp;

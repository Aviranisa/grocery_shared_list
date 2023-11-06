import React, { useState } from "react";
import "./searchProductCardStyle.css";
import useEditListById from "../costum_hooks/useEditListById";
import { useSelector } from "react-redux";

const SearchProductCardComp = ({ product }) => {
	const editListById = useEditListById();
	const saveProductIdOnClick = () => {
		editListById({ productsApiKeys: product.id });
	};

	if (!product) {
		return null;
	}
	return (
		<div className="cardContainer" onClick={() => saveProductIdOnClick()}>
			<img
				className="productImg"
				src={
					`https://www.rami-levy.co.il/_ipx/w_245,f_webp/https://img.rami-levy.co.il${product.images?.small}` ||
					null
				}
				alt={product.name}
			/>
			<div className="cardName">{product.name}</div>
			<div>{product.price?.price}₪</div>
		</div>
	);
};

export default SearchProductCardComp;

import React, { useState } from "react";
import useSearchRamiLevyProducts from "../costum_hooks/useSearchRamiLevyProducts";
import SearchProductCardComp from "../search_product_card_comp/searchProductCardComp";
import "./searchProductStyle.css";

const SearchProductComp = () => {
	const [isLoad, setIsLoad] = useState(false);
	const [searchKey, setSearchKey] = useState("");
	const [searchedProducts, setSearchedProducts] = useState([]);
	const searchRamiLevyProducts = useSearchRamiLevyProducts();

	const searchProducts = () => {
		if (searchKey) {
			setIsLoad(true);
			searchRamiLevyProducts(searchKey).then((products) => {
				setSearchedProducts(products);
				setIsLoad(false);
			});
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			searchProducts();
		}
	};

	return (
		<div className="searchContiner">
			<div className="searchForm">
				<input
					type="search"
					placeholder="Search product here"
					className="searchInput"
					value={searchKey}
					onChange={(e) => setSearchKey(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button onClick={searchProducts} className="searchButton">
					Search Products
				</button>
			</div>
			<div className="cardCarousel">
				{isLoad ? (
					<div>Loading...</div>
				) : (
					searchedProducts.map((product) => (
						<SearchProductCardComp key={product.id} product={product} />
					))
				)}
			</div>
		</div>
	);
};

export default SearchProductComp;

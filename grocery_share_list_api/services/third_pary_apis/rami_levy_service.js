import axios from "axios";

const ramiLevySearchProd = async (prodName) => {
	const res = await axios.get(
		`https://www.rami-levy.co.il/api/search?q=${prodName}`
	);

	// To avoid potential circular reference issues and ensure a clean API response,
	// we extract only the relevant data from the Axios response and structure it
	// into the desired format, excluding any non-serializable properties.
	return [...res.data.data];
};

export { ramiLevySearchProd };

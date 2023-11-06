import TinyURL from "tinyurl";
export const arrayToObject = (array) => {
	const obj = {};

	array.forEach((element) => {
		obj[element.id] = element;
	});
	return obj;
};

export const createShortUrl = async (urlToShort) => {
	return await TinyURL.shorten(urlToShort);
};

import Router from "express";
import { ramiLevySearchProd } from "../services/third_pary_apis/rami_levy_service.js";
const ramiLevyRouter = Router();

ramiLevyRouter.route("/search_products").post(async (req, res) => {
	try {
		const { searchKey } = req.body;
		let searchProducts = await ramiLevySearchProd(searchKey);
		if (!searchProducts) {
			throw new Error("something went wrong.");
		} else {
			res.status(200).send(searchProducts);
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});

// listRouter.route("/").post((req, res) => {
// 	try {
// 		let newList = addNewList(req.body);
// 		if (!newList) {
// 			throw new Error("something went wrong.");
// 		} else {
// 			res.status(200).send(newList);
// 		}
// 	} catch (err) {
// 		res.status(500).send(err.message);
// 	}
// });

// listRouter.route("/:id").put(async (req, res) => {
// 	try {
// 		let listToEdit = await editList(req.params.id, req.body);
// 		if (!listToEdit) {
// 			throw new Error("something went wrong.");
// 		} else {
// 			res.status(200).send(listToEdit);
// 		}
// 	} catch (err) {
// 		res.status(500).send(err.message);
// 	}
// });

// listRouter.route("/:id").delete(async (req, res) => {
// 	try {
// 		let listToDelete = await deleteList(req.params.id);
// 		if (!listToDelete) {
// 			throw new Error("something went wrong.");
// 		} else {
// 			res.status(200).send("deleted!");
// 		}
// 	} catch (err) {
// 		res.status(500).send(err.message);
// 	}
// });
export default ramiLevyRouter;

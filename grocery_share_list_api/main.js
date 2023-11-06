import e from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ENV_KEYS } from "../envModule.js";
import loginRouter from "./routers/login_router.js";
import signUpRouter from "./routers/sign_up_router.js";
import userRouter from "./routers/user_router.js";
import listRouter from "./routers/lists_router.js";
import ramiLevyRouter from "./routers/rami_levy_router.js";
import { verify } from "./services/login/auth_service.js";
import db from "./grocery_list_db/models/index.js";

const app = e();
app.use(e.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/login", loginRouter);
app.use("/api/sign_up", signUpRouter);
app.use("/api/users", verify, userRouter);
app.use("/api/lists", verify, listRouter);
app.use("/api/rami_levy", verify, ramiLevyRouter);

app.use(function (req, res, next) {
	res.status(404).send("Wrong endpoint");
});

db.sequelize.sync({ force: true }).then(() => {
	app.listen(ENV_KEYS.port, () =>
		console.log(`server is runing on port ${ENV_KEYS.port}`)
	);
});

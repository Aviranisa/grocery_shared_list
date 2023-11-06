import * as dotenv from "dotenv";
dotenv.config();

export const ENV_KEYS = {
	port: process.env.DEV_PORT,
	jwt_secret: process.env.JWT_SECRET,
};

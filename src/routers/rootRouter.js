import express from "express";
import { home, search } from "../controllers/videoController";
import { getJoin, postJoin, getLogin, postLogin } from "../controllers/userController";
import { publicOnlyMiddleware } from "../middlewares";


const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").all(publicOnlyMiddleware).get(getJoin).post(postJoin);
rootRouter.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin);
rootRouter.get("/search", search);



export default rootRouter; // 누구든 rootRouter.js를 import하면 rootlRoute 자체를 임포트하게 됌
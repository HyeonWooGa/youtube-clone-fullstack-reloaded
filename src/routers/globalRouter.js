import express from "express";
import { trending } from "../controllers/videoController";
import { join } from "../controllers/userController";


const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);


export default globalRouter; // 누구든 globalRouter.js를 import하면 globalRoute 자체를 임포트하게 됌
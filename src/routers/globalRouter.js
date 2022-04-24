import express from "express";
import { home, search } from "../controllers/videoController";
import { join, login } from "../controllers/userController";


const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);



export default globalRouter; // 누구든 globalRouter.js를 import하면 globalRoute 자체를 임포트하게 됌
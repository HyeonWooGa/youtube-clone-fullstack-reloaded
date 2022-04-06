import express from "express";


const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);


export default globalRouter; // 누구든 globalRouter.js를 import하면 globalRoute 자체를 임포트하게 됌
import express from "express";
import { see, edit, deletVideo, upload } from "../controllers/videoController"


const videoRouter = express.Router();

videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deletVideo);
videoRouter.get("/upload", upload);


export default videoRouter;
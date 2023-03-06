import express from "express";
import { home } from "../apiController.js";

const globalRouter = express.Router();

globalRouter.get('/', home);

export default globalRouter;
import express from "express";
import fetchFromAPI from "../Controllers/predictionResultController.js";
const AdminRouter=express.Router();
AdminRouter.post("/predict",fetchFromAPI);
export default AdminRouter;

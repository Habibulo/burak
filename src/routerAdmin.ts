import express from "express";
import restaurantController from "./controllers/restaurant.controller";
const routerAdmin = express.Router();

// Home Page
routerAdmin.get("/", restaurantController.goHome);

// Login Page
routerAdmin.get("/login", restaurantController.getLogin);

// Sign-up Page
routerAdmin.get("/signup", restaurantController.getSignup);

export default routerAdmin;

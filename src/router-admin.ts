import express from "express";
import restaurantController from "./controllers/restaurant.controller";
const routerAdmin = express.Router();

/** Restaurant **/
// Home Page
routerAdmin.get("/", restaurantController.goHome);
// Login Page
routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin);
// Sign-up Page
routerAdmin
    .get("/signup", restaurantController.getSignup)
    .post("/signup", restaurantController.processSignup);

routerAdmin.get("/check-me", restaurantController.checkAdminAuthSession);
routerAdmin.get("/logout", restaurantController.logout);
    
/** Product **/
/** User **/

export default routerAdmin;

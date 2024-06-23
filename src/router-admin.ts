import express from "express";
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
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
routerAdmin.get("/product/all", 
    restaurantController.verifyRestaurant,
    productController.getAllProducts);
routerAdmin.post("/product/create", 
    restaurantController.verifyRestaurant,
    productController.createNewProduct);
routerAdmin.post("/product/:id", 
    restaurantController.verifyRestaurant,
    productController.updateChosenProduct);

/** User **/

export default routerAdmin; 

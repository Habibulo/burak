import express from "express";
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";
const routerAdmin = express.Router();

/** Restaurant **/
// Home Page
routerAdmin.get("/", restaurantController.goHome);
// Login Page
routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/signup", makeUploader("members").single("memberImage"), restaurantController.adminSignup);

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

routerAdmin.post(
        "/product/create",
        restaurantController.verifyAdmin,
        // makeUploader("products").single("productImage"),
        makeUploader("products").array("productImages", 5),
        productController.createNewProduct
)

routerAdmin.post("/product/:id", 
    restaurantController.verifyRestaurant,
    productController.updateChosenProduct);

/** User **/

export default routerAdmin; 

import { T } from "../libs/types/comments";
import { Request, Response } from "express";
import Errors from "../libs/Errors";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";
const productController: T = {};

const productService = new ProductService()

/* getAllProducts */
productController.getAllProducts = async (req: AdminRequest, res: Response) => {
    try {
        console.log('req.mem:', req.member);        
        console.log("getAllProducts")
        res.render('products')

    } catch (err) {
        console.log("Error, Signup", err)
        if(err instanceof Errors) res.status(err.code).json(err)
            else res.status(Errors.standard.code).json(Errors.standard)
    }
}
/* createNewProduct */
productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log("createNewProduct")
    } catch (err) {
        console.log("Error, createNewProduct", err)
        if(err instanceof Errors) res.status(err.code).json(err)
            else res.status(Errors.standard.code).json(Errors.standard)
    }
}
/* updateChosenProduct */
productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenProduct")
    } catch (err) {
        console.log("Error, updateChosenProduct", err)
        if(err instanceof Errors) res.status(err.code).json(err)
            else res.status(Errors.standard.code).json(Errors.standard)
    }
}

export default productController;
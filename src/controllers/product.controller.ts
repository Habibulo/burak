import { Request, Response } from 'express';
import Errors, { HttpCode, Message } from '../libs/Errors';
import ProductService from "../models/Product.service"
import { AdminRequest } from '../libs/types/member';
import { T } from '../libs/types/comments';
import { ProductInput } from '../libs/types/product';

const productService = new ProductService()

const productController: T = {};

/*SPA*/

/*BSSR*/
``
productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts")
        const data = await productService.getAllProducts()
        if (data.length === 0) {
            res.render('products', { message: 'No data found', products: [] });
        } else {
            res.render('products', { products: data });
        }
    } catch (err) {
        console.log("Error, getAllProducts", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
};

productController.createNewProduct = async (req: AdminRequest, res: Response) => {
    try {
        // console.log("createNewProduct")
        // console.log("Requested product files: ", req.files);
        console.log("req.body:", req.body);
        if(!req.files?.length)
            throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED)
        const data: ProductInput = req.body
        data.productImages = req.files?.map(ele => {
            return ele.path
        });
        await productService.createNewProduct(data)
        res.send(
            `<script>alert("Product succesfully created in DataBase");
            window.location.replace('/admin/product/all')</script>`)

        // console.log("Bizning Datamiz", data);

    } catch (err) {
        console.log("Error, createNewProduct", err);
        const message = err instanceof Errors ? err.message: Message.CREATE_FAILED
        res.send(
            `<script>alert("${message}");
            window.location.replace('/admin/product/all')</script>`)
    }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await productService.updateChosenProduct(id, req.body)
        res.status(HttpCode.OK).json({data: result})
    } catch (err) {
        console.log("Error, updateChosenProduct", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
};

export default productController
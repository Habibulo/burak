import { Product, ProductInput, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";

class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }

    /*SPA*/
    /*BSSR*/


    public async getAllProducts(): Promise<Product[]> {
    
        const result = await this.productModel
        .find()
        .exec()
        if(result.length == 0 ) 
            throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND)
        return result
    }

    public async createNewProduct(input: ProductInput): Promise<Product> {
        try {
            return await this.productModel.create(input)
            
        } catch (err) {
            console.log("Error on creating Product", err);            
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
        }
    }

    public async updateChosenProduct(id: string, input: ProductUpdateInput): Promise<Product> {
        id = shapeIntoMongooseObjectId(id)
        const result = await this.productModel
        .findOneAndUpdate({_id: id}, input, {new: true})
        .exec()
        if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED)
        console.log("resultimiz", result);
        return result
    }
}

export default ProductService
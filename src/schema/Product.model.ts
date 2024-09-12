import mongoose, { Schema } from "mongoose";
import {
  ProductCategory,
  ProductSize,
  ProductStatus,
  ProductVolume,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.ACTIVE,
    },
    productCollection: {
      type: String,
      enum: ProductCategory,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productLeftCount: {
      type: Number,
      required: true,
    },
    productSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.NORMAL,
    },
    productVolume: {
      type: Number,
      enum: ProductVolume,
      default: ProductVolume.ONE,
    },

    productDesc: {
      type: String,
    },

    productImages: {
      type: [String],
      default: [],
    },

    productViews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // createdAt, updatedAt
);

productSchema.index(
  { productName: 1, productSize: 1, productVolume: 1 },
  { unique: true }
);

export default mongoose.model("Product", productSchema);

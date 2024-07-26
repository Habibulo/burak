import mongoose, { Schema } from "mongoose";
import { OrderStatus } from "../libs/enums/order.enum";
const orderSchema = new Schema(
  {
    orderTotal: {
      type: Number,
      required: true,
    },
    orderDelivery: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: OrderStatus,
      default: OrderStatus.PAUSE,
    },
    memberId: {
      type: String,
      required: true,
      ref: "Member",
    },
  },
  { timestamps: true, collection: "orders"} // createdAt, updatedAt
);

export default mongoose.model("Order", orderSchema);

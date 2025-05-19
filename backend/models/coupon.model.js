import mongooes from "mongoose";

const couponSchema = new mongooes.Schema({
  code: {
    type : String,
    required : true,
    unique : true,
  },
  discountPercentage: {
    type: Number,
    required: true,
    min : 0,
    max : 100,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  userId: {
    type: mongooes.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
},
{
  timestamps: true,
}
);

export const Coupon = mongooes.model("Coupon", couponSchema);

export default Coupon;
  
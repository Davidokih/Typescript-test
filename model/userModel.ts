import mongoose from "mongoose";

interface userData {
    userName: string,
    email: string,
    password: string,
    phoneNum: number,
    product: {}[],
}

interface Data extends userData, mongoose.Document { }

const userModel = new mongoose.Schema({
    userName: {
      type: String
    }, 
    email: {
      type: String
    }, 
    password: {
      type: String
    }, 
    phoneNum: {
      type: Number
  }, 
  product: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "products"
  }]
},{timestamps: true})

const mySchema = mongoose.model<Data>("users", userModel)

export default mySchema

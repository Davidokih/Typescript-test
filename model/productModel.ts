import mongoose from "mongoose"

interface productData {
    productName: string,
    amount: number,
    quantity: number,
    user: {}
}

interface Data extends productData, mongoose.Document { }

const productModel = new mongoose.Schema({
    productName: {
        type: String
    },
    amount: {
        type: Number
    },
    quantity: {
        type:  Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
},{timestamps: true})

const proModel = mongoose.model<Data>("products", productModel)
export default proModel
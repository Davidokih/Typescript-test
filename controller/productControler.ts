import userModel from "../model/userModel"
import productModel from "../model/productModel"
import mongoose from "mongoose"
import {Request,Response} from "express"

const createProduct = async (req:Request,res:Response ):Promise<Response> => {
    try {
        const { productName, amount, quantity } = req.body
        const getUser = await userModel.findById(req.params.userID)
        const userProduct = await productModel.create({
            productName,
            amount,
            quantity
        })

        getUser?.product?.push(new mongoose.Types.ObjectId(userProduct._id))
        getUser?.save()

        return res.status(201).json({
            status: "Success",
            data: userProduct
        })
    } catch (err) {
        return res.status(500).json({
            status: "fail",
            message: err
        })
    }
}

const allProduct = async (req: Request, res: Response): Promise<Response> => {
    try {
        const product = await userModel.findById(req.params.userID).populate("products")

        return res.status(200).json({
            status: "Success",
            data: product
        })
    }catch (err) {
        return res.status(500).json({
            status: "fail",
            message: err
        })
    }
}

const singleProduct = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await userModel.findById(req.params.userID)
        const product = await productModel.findById(req.params.productID)

        return res.status(200).json({
            status: "Success",
            data: product
        })
    }catch (err) {
        return res.status(500).json({
            status: "fail",
            message: err
        })
    }
}

const updateProduct = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { productName, amount, quantity } = req.body
        const user = await userModel.findById(req.params.userID)
        const product = await productModel.findByIdAndUpdate(user?._id, {
            productName,
            amount,
            quantity
        }, { new: true })
        
        return res.status(200).json({
            status: "Success",
            data: product
         })
    }catch (err) {
        return res.status(500).json({
            status: "fail",
            message: err
        })
    }
}

const deleteProduct = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await userModel.findById(req.params.userID)
        const product = await productModel.findByIdAndDelete(req.params.productID)
        
        return res.status(200).json({
            status: "Success",
            message: "product deleted"
         })
    }catch (err) {
        return res.status(500).json({
            status: "fail",
            message: err
        })
    }
}

export {
    createProduct,
    allProduct,
    singleProduct,
    updateProduct,
    deleteProduct
}
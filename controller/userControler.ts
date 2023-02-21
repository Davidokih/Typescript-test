import { Request, Response } from "express";
import userModel from "../model/userModel"

const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { userName, email, password, phoneNum } = req.body
        const user = await userModel.create({
            userName,
            email,
            password,
            phoneNum
        })

        return res.status(201).json({
            status: "Success",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            status: "Fail",
            message: error
        })
    }
}

const allUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        
        const user = await userModel.find()

        return res.status(200).json({
            status: "Success",
            data: user
        })
    } catch (err) {
        return res.status(500).json({
            status: "Fail",
            message: err
        })
    }
}

const singleUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        
        const user = await userModel.findById(req.params.id)

        return res.status(200).json({
            status: "Success",
            data: user
        })
    } catch (err) {
        return res.status(500).json({
            status: "Fail",
            message: err
        })
    }
}

const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {userName, email, password, phoneNum} = req.body
        const user = await userModel.findByIdAndUpdate(req.params.id, {
            userName,
            email,
            password,
            phoneNum
        }, {new: true})

        return res.status(200).json({
            status: "Success",
            data: user
        })
    } catch (err) {
        return res.status(500).json({
            status: "Fail",
            message: err
        })
    }
}

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        
        const user = await userModel.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            status: "Success",
            message: "User Deleted"
        })
    } catch (err) {
        return res.status(500).json({
            status: "Fail",
            message: err
        })
    }
}

export {
    createUser,
    updateUser,
    allUser,
    singleUser,
    deleteUser
}
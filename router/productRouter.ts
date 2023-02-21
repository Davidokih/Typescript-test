import express from "express"
import {createProduct,
    allProduct,
    singleProduct,
    updateProduct,
    deleteProduct
} from "../controller/productControler"
const router = express.Router()

router.route("/:userID/create").post(createProduct)
router.route("/:userID/product").get(allProduct)
router.route("/:userID/:productID/product").get(singleProduct)
router.route("/:userID/:productID/update").patch(updateProduct)
router.route("/:userID/:productID/delete").delete(deleteProduct)

export default router
import express from "express"
import {
    createUser,
    allUser,
    singleUser,
    updateUser,
    deleteUser
} from "../controller/userControler"

const router = express.Router()

router.route("/get").get(allUser)
router.route("/create").post(createUser)
router.route("/:id").get(singleUser)
router.route("/:id/update").patch(updateUser)
router.route("/:id/delete").delete(deleteUser)

export default router
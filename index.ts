import express,{Application, Request, Response} from "express"
import cors from "cors"
import "./utils/db"
import userRouter from "./router/userRouter"
import productRouter from "./router/productRouter"

const port: number = 5555
const app: Application = express()

app.use(cors())
app.use(express.json())

app.get("/", (req:Request,res:Response) => {
    return res.json({
        message: "This server is now working"
    })
})

app.use("/api/user", userRouter)
app.use("/api/product", productRouter)

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
import mongoose from "mongoose"

const url: string = "mongodb://localhost/E-database"
const url2 = "mongodb://localhost:27017/E-database"

mongoose.connect(url).then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log(err)
})

export default mongoose
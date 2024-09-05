const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config()

const {connect} = require("./db/connect")
const BooksRouter = require("./routers.js/Books")

app.use(cors());
app.use(express.json());

connect()

app.use("/", BooksRouter)

// app.use("/booklist-testing", (req, res)=>{
//   res.status(200).json({
//     success: true,
//     message: "Booklist back-end running successfuly."
//   })
// })

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
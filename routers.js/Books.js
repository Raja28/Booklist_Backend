const express = require("express");
const router = express.Router()

const { getAllBooks, addBookDetails, deleteBook, updateBookDetail } = require("../controller/Books");

router.get('/books', getAllBooks)
router.post('/books', addBookDetails)
router.put('/books', updateBookDetail)
router.delete('/books/:id', deleteBook)

router.get("/", (req, res)=>{
    res.status(200).json({
      success: true,
      message: "Booklist back-end running successfuly."
    })
  })

module.exports = router
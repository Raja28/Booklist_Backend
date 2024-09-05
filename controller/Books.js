const { default: mongoose } = require("mongoose");
const Books = require("../models/Books")


exports.getAllBooks = async (req, res) => {
    try {
        const allbooks = await Books.find();

        res.status(200).json({
            success: true,
            message: "books fetched successfully",
            allbooks
        })
    } catch (error) {

        res.status(500).json({
            success: false,
            error: "failed to fetch books, Try Again"
        })
    }
}

exports.addBookDetails = async (req, res) => {

    try {
        const { bookName, author, genre } = req.body;

        const bookData = new Books({ bookName, author, genre });

        await bookData.save();

        res.status(200).json(bookData);

    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

exports.deleteBook = async (req, res) => {
    const bookId = req.params.id;

    try {
        const deletedBook = await Books.findByIdAndDelete(bookId);

        if (!deletedBook) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.status(200).json({
            message: "Book deleted successfully",
            deletedBook,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error", });
    }
}

exports.updateBookDetail = async (req, res) => {
    try {

        const { bookName, author, genre, _id } = req.body;

        const bookDetails = await Books.findByIdAndUpdate({ _id }, { bookName, author, genre }, { new: true })

        if (bookDetails) {
            res.status(200).json({
                success: true,
                message: "book updated successfully",
                bookDetails
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            error: "failed to update book, Try again"
        })
    }
}

// exports.testing = (req, res) => {
//     try {
//         res.status(200).json({
//             success: true,
//             message: "Booklist app running successfully"
//         })
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "internal sever error"
//         })
//     }
// }
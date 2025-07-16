import "dotenv/config";
import express from "express";
import cors from "cors";
import books from "./books.js";

//App config
const PORT = process.env.PORT || 5000;
const app = express();

//Initializing middlewares
app.use(express.json());
app.use(cors());

//API routes
// Endpoint to get the list of books GET/books API
app.get("/books", (req, res) => {
    res.json(books);
});

// Endpoint to place an order POST/order API
app.post("/order", (req, res) => {
  const { bookId, customerName } = req.body;

  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ success: false, message: 'Book not found' });
  }

  res.json({
    success: true,
    message: `Order placed successfully!`,
    order: {
      bookTitle: book.title,
      author: book.author,
      customer: customerName
    }
  });
  console.log(`Order placed: ${customerName} ordered ${book.title}.`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
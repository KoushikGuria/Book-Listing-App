import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BuyBooks = () => {
  // Get the book details from the location state
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state;

  const [customerName, setCustomerName] = useState("");

  // Function to handle order placement
  const handleOrder = async () => {
    if (!customerName.trim()) {
      alert("Please enter your name to place the order.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookId: book.id,
          customerName: customerName,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert(
          data.message +
            `\nCustomer: ${data.order.customer}\nBook: ${data.order.bookTitle}`
        );
        navigate("/");
      } else {
        alert("Failed to place order: " + data.message);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-[80vh] text-center pt-14 px-4">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Order Summary</h1>

      <div className="max-w-md mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-8 text-left">
        <p className="text-gray-700 mb-4">
          <span className="font-medium">Book Title:</span> {book.title}
        </p>
        <p className="text-gray-700 mb-6">
          <span className="font-medium">Author:</span> {book.author}
        </p>

        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter your name"
        />

        <button
          onClick={handleOrder}
          className="w-full mt-6 bg-gray-800 text-white py-2.5 rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BuyBooks;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // State to hold the list of books
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  // Fetch books from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Failed to fetch books", err));
  }, []);

  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">
        Books Collection
      </button>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10">
        Choose the Book that's right for you
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {books.map((item, index) => (
          <div
            className="bg-white drop-shadow-sm border-gray-500 rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500"
            key={index}
          >
            <p className="mt-3 font-semibold">{item.id}</p>
            <p className="text-3xl">{item.title}</p>
            <p className="mt-6">
              <span className="text-sm font-medium">Author: {item.author}</span>
            </p>
            <button
              onClick={() => navigate("/buy", { state: item })}
              className="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52 cursor-pointer"
            >
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
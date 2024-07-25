import React, { useContext,useState,useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Welcome = () => {
  const { user, orderItemsLength, orderItems } = useContext(UserContext);
  const [showOrderIds, setShowOrderIds] = useState(false);
  const handleClick = () => {
    setShowOrderIds(!showOrderIds);


  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { user, orderItemsLength } = useContext(UserContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:9191/book-service/books', {
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  const handleAddToCart = (itemId) => {
    const selectedBook = books.find(book => book.id === itemId);
    if (selectedBook) {
      setCartItems([...cartItems, selectedBook]);
      // Remove the selected item from books state
      // setBooks(books.filter(book => book.id !== itemId));
    }
  };
  const handleRemoveFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
    // Add the removed item back to books state
    // setBooks([...books, itemToRemove]);

  };
  return (

    <div>

      <h1>Welcome {user.name}</h1>
      {user && <p>Your user ID is: {user.userId}</p>}
      <p>
        <a href="#" onClick={handleClick}>
          Your orders are: {orderItemsLength}
        </a>
      </p>
      {showOrderIds && (
        <ul>
          {orderItems.map((item) => (
            <li key={item.orderId}>Order ID: {item.orderId}</li>
          ))}
        </ul>
      )}
      <h2>Books Catalog</h2>
      <ol>
        {books.map(book => (
          <li key={book.id}>
            <strong>Title:</strong> {book.title}<br />
            <strong>ID:</strong> {book.id}<br />
            <strong>Price:</strong> {book.price}<br />
            <strong>Publish Date:</strong> {book.pubDate}<br />
            <button onClick={() => handleAddToCart(book.id)}>Add to Cart</button>
          </li>
        ))}
      </ol>

      <h3>Cart Items:</h3>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.title} - {item.price}
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Welcome;

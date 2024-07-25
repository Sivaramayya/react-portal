import React, { useContext,useState,useEffect } from 'react';
import { UserContext } from '../context/UserContext';

import axios from 'axios';

const Catalog = () => {
  
  
    const [books, setBooks] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    
  
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
}

export default Catalog

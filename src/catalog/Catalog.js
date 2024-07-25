import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const Catalog = () => {
  const { user } = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:9191/book-service/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleAddToCart = (itemId) => {
    const selectedBook = books.find(book => book.id === itemId);
    const isAlreadyInCart = cartItems.some(item => item.id === itemId); // prevent duplicate additions
    if (selectedBook && !isAlreadyInCart) {
      setCartItems([...cartItems, selectedBook]);
    }
  };

  const handleRemoveFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
  };

  const toggleCartVisibility = () => {
    setShowCart(!showCart);
  };

  const handlePlaceOrder = async () => {
    const userId = user.userId;
    try {
      const response = await axios.post('http://localhost:9191/order-management/orders', {
        userId,
        bookIds: cartItems.map(item => item.id),
      });
      setMessage('Order placed successfully!');
      setCartItems([]);
    } catch (error) {
      setMessage('Failed to place order. Please try again.');
      console.error('Error placing order:', error);
    }
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

      <button onClick={toggleCartVisibility}>
        {showCart ? 'Hide Cart Items' : `Show Cart Items (${cartItems.length})`}
      </button>

      {showCart && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {cartItems.map(item => (
            <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', width: '200px' }}>
              <strong>Title:</strong> {item.title}<br />
              <strong>ID:</strong> {item.id}<br />
              <strong>Price:</strong> {item.price}<br />
              <strong>Publish Date:</strong> {item.pubDate}<br />
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </div>
          ))}
          <div style={{ width: '100%', marginTop: '20px' }}>
            <button onClick={handlePlaceOrder} disabled={!cartItems.length}>
              Place Order
            </button>
            <p>{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;

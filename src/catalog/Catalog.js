import React, {useState,useEffect } from 'react';
import axios from 'axios';

const Catalog = () => {


    const [books, setBooks] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
  
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
     // Remove the selected item from books state
    // setBooks(books.filter(book => book.id !== itemId));
    const handleAddToCart = (itemId) => {
      const selectedBook = books.find(book => book.id === itemId);
      const isAlreadyInCart = cartItems.some(item => item.id === itemId);//all ready selected items will not be selected
      if (selectedBook && !isAlreadyInCart) {
        setCartItems([...cartItems, selectedBook]);
      }
    };
    // Add the removed item back to books state
      // setBooks([...books, itemToRemove]);
    const handleRemoveFromCart = (itemToRemove) => {
      const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
      setCartItems(updatedCart);
  
    };
    const toggleCartVisibility = () => {
      setShowCart(!showCart);
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
        </div>
      )}
    </div>
  );
}
export default Catalog;

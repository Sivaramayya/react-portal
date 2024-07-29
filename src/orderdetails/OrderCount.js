import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

const OrderCount = () => {
  const { user, orderItemsLength, orderItems } = useContext(UserContext);
  const [showOrderIds, setShowOrderIds] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  
  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = () => {
    setShowOrderIds(!showOrderIds);
  };

  const handleOrderClick = async (orderId) => {
    try {
      
      const orderResponse = await axios.get(`http://localhost:9191/order-management/orders/${orderId}`);
      console.log(orderResponse);
      const lineItems = orderResponse.data.lineItems;

      // Extract bookIds from lineItems
      const bookIds = lineItems.map(item => item.bookId);

      
      console.log(bookIds);
      const booksResponse = await axios.get('http://localhost:9191/book-service/books');
      const orderBooks = booksResponse.data.content.filter(book => bookIds.includes(book.id));
      setOrderDetails(orderBooks);
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  };

  return (
    <div>
      {showOrderIds && (
        <ul>
          {orderItems.map((item) => (
            <li key={item.orderId}>
              <a href="#" onClick={() => handleOrderClick(item.orderId)}>Order ID: {item.orderId}</a>
            </li>
          ))}
        </ul>
      )}
      {orderDetails && (
        <div>
          <h3>Order Details</h3>
          <ul>
            {orderDetails.map(book => (
              <li key={book.id}>
                <strong>Title:</strong> {book.title}<br />
                <strong>ID:</strong> {book.id}<br />
                <strong>Price:</strong> {book.price}<br />
                <strong>Publish Date:</strong> {book.pubDate}<br />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default OrderCount;
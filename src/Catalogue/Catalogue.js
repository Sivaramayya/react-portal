
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Catalogue = () => {
  const [books, setBooks] = useState([]);

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

  return (
    <div>
      <h2>Books Catalog</h2>
      <ol>
        {books.map(book => (
          <><li key={book.id}>
                <strong>Title:</strong> {book.title}<br />
                <strong>id:</strong> {book.id}<br />
                <strong>price:</strong> {book.price}<br />
                <strong>publish_date:</strong> {book.pubDate}<br />
            </li><br /></>
        ))}
      </ol>
    </div>
  );
};

export default Catalogue;

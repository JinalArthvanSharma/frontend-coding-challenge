import React from 'react';

const BooksList = ({ bookstore, books, authors }) => {
  const renderBookRow = (book) => {
    const foundBook = books.find((item) => item.id === book.id);

    if (!foundBook) {
      return (
        <tr key={book.id}>
          <td>Book Not Found</td>
          <td>N/A</td>
        </tr>
      );
    }

    const authorId = foundBook.relationships.author.data.id;
    const foundAuthor = authors.find((item) => item.id === authorId);

    return (
      <tr key={book.id}>
        <td>{foundBook.attributes.name}</td>
        <td>{foundAuthor ? foundAuthor.attributes.fullName : 'N/A'}</td>
      </tr>
    );
  };

  return (
    <div className="book-list-frame">
      <table className="book-list">
        <thead>
          <tr>
            <th>Best-selling books</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {bookstore.relationships.books &&
          Array.isArray(bookstore.relationships.books.data) &&
          bookstore.relationships.books.data.length > 0 ? (
            bookstore.relationships.books.data.slice(0, 2).map(renderBookRow)
          ) : (
            <tr>
              <td colSpan="2">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;

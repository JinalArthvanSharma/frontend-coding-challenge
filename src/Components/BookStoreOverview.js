import React, { useState } from 'react';
import BooksList from './BooksList';
import BookStoreCountryFlag from './BookStoreCountryFlag';
import BookStoreRatings from './BookStoreRatings';
import BookStoreMetaData from './BookStoreMetaData';
import './BookStoreOverview.css';
import './BookStoreComponents.css';

const BookStoreOverview = ({ bookstore, books, countries, authors }) => {
  const countryId = bookstore.relationships.countries.data.id;
  const countryData = countries.find((country) => country.id === countryId);

  // Initial rating state for the bookstore
  const [bookStoreRating, setBookStoreRating] = useState(bookstore.attributes.rating);

  // Function to update the bookstore rating
  const updateBookStoreRating = (newRating) => {
    setBookStoreRating(newRating);
  };

  return (
    <div className="bookstore">
      <div className="bookstore-frame">
        {/* Bookstore icon image */}
        <div className="image-frame">
          <img src={bookstore.attributes.storeImage} alt={bookstore.attributes.name} />
        </div>

        {/* Bookstore name */}
        <div className="bookstore-name">
          <p>{bookstore.attributes.name}</p>
        </div>

        {/* List of best-selling books */}
        <BooksList bookstore={bookstore} books={books} authors={authors} />

        {/* Bookstore rating */}
        <div className="rating">
          <BookStoreRatings initialValue={bookStoreRating} onChange={updateBookStoreRating} />
        </div>

        {/* Website link and Establishment */}
        <div className="establishment">
          <BookStoreMetaData date={bookstore.attributes.establishmentDate} website={bookstore.attributes.website} />
        </div>

        {/* Display country flag */}
        <BookStoreCountryFlag countryInfo={countryData} className="country-flag" />
      </div>
    </div>
  );
};

export default BookStoreOverview;

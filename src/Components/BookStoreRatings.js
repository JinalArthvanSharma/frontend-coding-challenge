import React, { useState } from 'react';

const BookStoreRatings = ({ initialValue, onChange }) => {
  // State to manage the ratings
  const [ratings, setRatings] = useState(initialValue || 0);

  // Function to update ratings and trigger onChange callback
  const updateRatings = (newRatings) => {
    setRatings(newRatings);
    if (onChange) {
      onChange(newRatings);
    }
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${ratings >= star ? 'filled' : ''}`}
          onClick={() => updateRatings(star)}
        >
          {/* Star character's Unicode*/}
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default BookStoreRatings;

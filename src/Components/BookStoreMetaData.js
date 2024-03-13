import React from 'react';
import './BookStoreComponents.css';
import dateFormatter from '../libs/dateFormatter';

const BookStoreMetaData = ({ date, website }) => {
  const displayDate = dateFormatter(date);

  return (
    <div>
      <time dateTime={date}>{displayDate}</time>
      <span>-</span>
      <a className="link" href={website} target="_blank" rel="noopener noreferrer">
      {website}
      </a>
    </div>
  );
};

export default BookStoreMetaData;

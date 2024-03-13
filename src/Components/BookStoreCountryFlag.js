import React, { useState, useEffect } from 'react';

const BookStoreCountryFlag = ({ countryInfo }) => {
  const [flagUrl, setFlagUrl] = useState('');

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const countryKey = countryInfo.attributes.code;
        const url = `https://restcountries.com/v3.1/alpha/${countryKey}`;
        const response = await fetch(url);

        if (!response.ok) {
          console.error('Failed to fetch country flag:', response.status, response.statusText);
          return;
        }

        const data = await response.json();

        if (data[0].flags && data[0].flags.png) {
          setFlagUrl(data[0].flags.png);
        }
      } catch (error) {
        console.error('Error while fetching country flag:', error);
      }
    };

    fetchFlag();
  }, [countryInfo]);

  return (
    <div className="country-flag">
      {/* Display the country flag image */}
      <img src={flagUrl} alt="Country Flag" />
    </div>
  );
};

export default BookStoreCountryFlag;

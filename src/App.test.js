import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { getBookStoreData } from './libs/booksApi';

// Mocking the API call
jest.mock('./libs/booksApi');

describe('App Component', () => {
  test('renders App component with bookstores', async () => {
    const mockData = {
      books: [/* mocked book data */],
      countries: [/* mocked country data */],
      authors: [/* mocked author data */],
      stores: [/* mocked store data */],
    };

    getBookStoreData.mockResolvedValue(mockData);

    render(<App />);

    // Wait for the component to fetch and render data
    await waitFor(() => screen.getByText(/Bookstore Name/i));

    // Assertions based on your actual rendering logic
    expect(screen.getByText(/Bookstore Name/i)).toBeInTheDocument();
    // Add more assertions based on your actual UI components and logic
  });

  // Add more test cases as needed
});

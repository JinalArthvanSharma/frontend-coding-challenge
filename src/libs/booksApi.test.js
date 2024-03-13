import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getBookStoreData } from './booksApi';

// Mocking the API server
const server = setupServer(
  rest.get('http://localhost:3000/stores', (req, res, ctx) => {
    // Mock the response data
    const mockResponse = {
      data: [
        // Mocked store data
      ],
      included: [
        // Mocked countries, books, and authors data
      ],
    };
    return res(ctx.json(mockResponse), ctx.status(200));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('getBookStoreData', () => {
  test('fetches and returns book store data', async () => {
    const data = await getBookStoreData();

    // Assertions based on your data structure
    expect(data.authors).toHaveLength(/* expected length */);
    expect(data.books).toHaveLength(/* expected length */);
    expect(data.countries).toHaveLength(/* expected length */);
    expect(data.stores).toHaveLength(/* expected length */);
  });

  // Add more test cases as needed
});

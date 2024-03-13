import { formatterDate } from './dateFormatter';

describe('formatterDate', () => {
  test('formats date correctly', () => {
    // Assuming a sample date string in the format 'YYYY-MM-DD'
    const dateString = '2022-02-29';
    const formattedDate = formatterDate(dateString);

    // Expected formatted date based on the sample date
    const expectedDate = '29.02.2022';

    // Assertion
    expect(formattedDate).toEqual(expectedDate);
  });

  // Add more test cases as needed
});

import React, { Component } from 'react';
import './App.css';
import BookStoreOverview from './Components/BookStoreOverview';
import getBookStoreData from './libs/booksApi'; // Updated import statement

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookstores: [],
      books: [],
      countries: [],
      authors: [],
    };
  }

  componentDidMount() {
    // Fetch data from the API and update the state
    this.fetchData();
  }

  async fetchData() {
    try {
      const data = await getBookStoreData(); // Updated function call
      const { books, countries, authors, stores } = data; // Destructuring for cleaner code

      this.setState({ books });
      this.setState({ countries });
      this.setState({ authors });
      this.setState({ bookstores: stores });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { bookstores, books, countries, authors } = this.state; // Destructuring for cleaner code

    return (
      <div className="App">
        <main>
          {bookstores.map((bookstore) => (
            <BookStoreOverview
              key={bookstore.id}
              bookstore={bookstore}
              books={books}
              countries={countries}
              authors={authors}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;

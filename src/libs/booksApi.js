const getBookStoreData = async () => {
  const countries = [];
  const books = [];
  const authors = [];
  var stores = [];
  const apiData = await fetch('http://localhost:3000/stores').then((response) => response.json());
  
  stores = apiData.data;
  const resources = apiData.included;
  for (const resource of resources) {
    switch (resource.type) {
      case 'countries':
        countries.push(resource);
        break;
      case 'books':
        books.push(resource);
        break;
      case 'authors':
        authors.push(resource);
        break;
      default:
        break;
    }
  }

  return { authors, books, countries, stores };
};

module.exports = getBookStoreData;

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books') // Fetch data from the API
    .then(response => response.json())  // Convert the response to JSON
    .then(data => {
      renderBooks(data);
    })
    .catch(error => console.error("Error fetching books:", error)); 
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

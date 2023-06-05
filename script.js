// Define an array of book details
const books = [
    {
      title: "Book 1",
      cover: "book1.jpg",
      author: "Author 1",
      genre: "Genre 1",
      pages: 150
    },
    {
      title: "Book 2",
      cover: "book2.jpg",
      author: "Author 2",
      genre: "Genre 2",
      pages: 100
    },
    // Add details for other books...
  ];
  
  let currentBookIndex = 0; // Index of the currently displayed book
  
  // Function to update the book details on the page
  function updateBookDetails() {
    const book = books[currentBookIndex];
    document.getElementById("book-cover").src = book.cover;
    document.getElementById("author").textContent = `Author: ${book.author}`;
    document.getElementById("genre").textContent = `Genre: ${book.genre}`;
    document.getElementById("pages").textContent = `Pages: ${book.pages}`;
  }
  
  // Event listener for the next button
  document.getElementById("next-btn").addEventListener("click", () => {
    currentBookIndex = (currentBookIndex + 1) % books.length;
    updateBookDetails();
  });
  
  // Event listener for the previous button
  document.getElementById("previous-btn").addEventListener("click", () => {
    currentBookIndex = (currentBookIndex - 1 + books.length) % books.length;
    updateBookDetails();
  });
  
  // Initialize the page with the first book
  updateBookDetails();
  
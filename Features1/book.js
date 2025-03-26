


    // Function to open a specific book and hide others
function openBook(bookId, pdfSrc) {
  // Hide home page and show book page
  document.getElementById("homePage").style.display = "none";
  document.getElementById("bookPage").style.display = "block";

  // Hide all book content sections, including new additions
  document.querySelectorAll(".book-content").forEach(book => {
    book.style.display = "none";
  });

  // Show the selected book
  let selectedBook = document.getElementById(bookId);
  if (selectedBook) {
    selectedBook.style.display = "block";
    
    // Open the PDF in an iframe
    let iframe = selectedBook.querySelector("iframe");
    if (iframe && pdfSrc) {
      iframe.src = pdfSrc;
    }
  } else {
    alert("Book not found!"); // Fallback error handling
  }
}

// Function to go back to home page
function goHome() {
  document.getElementById("bookPage").style.display = "none";
  document.getElementById("homePage").style.display = "block";
}

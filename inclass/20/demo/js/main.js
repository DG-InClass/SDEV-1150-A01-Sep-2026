import MarkdownIt from 'markdown-it';
import { fetchBlob, fetchJson, fetchText, sendJson } from './utils.js';

// #region TEMPORARY
fetchJson('/books')
  .then(data => {
    console.log(data);
fetchJson('/summaries/orbiting-javascript.md')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.warn(error.message);
  });
});
// #endregion

const apiBase = ''; // For real-world, you would put in some actual domain
                    // such as https://backend.example.com
                    //         http://localhost:3000
const markdown = new MarkdownIt();

const loadButton = document.querySelector('#load-catalog');
const catalogStatus = document.querySelector('#catalog-status');
const detailStatus = document.querySelector('#detail-status');
const bookList = document.querySelector('#book-list');
const jacketImage = document.querySelector('#jacket-image');
const bookTitle = document.querySelector('#book-title');
const bookMeta = document.querySelector('#book-meta');
const authorBio = document.querySelector('#author-bio');
const summaryContent = document.querySelector('#summary-content');
const reviewList = document.querySelector('#review-list');
const addReviewForm = document.querySelector('#add-review');

let selectedBookId = null;
let jacketObjectUrl = null;

function showStatus(element, message, type = 'info') {
  element.textContent = message;
  element.dataset.status = type;
}

function buildEndpoint(path) {
  return `${apiBase}${path}`;
}

function clearJacketObjectUrl() {
  // TODO: Revoke the previous object URL with URL.revokeObjectURL().
}

function synthesizeCatalog(books, authors, reviews) {
  // This function acts similar to taking three database tables and
  // assembling/joining the data
  const result = books.map((book) => {
    // TODO: Join books to authors with authorId.
    const author = authors.find((item) => item.id === book.authorId);
    // TODO: Count reviews by bookId.
    const allReviews = reviews.filter((review) => review.bookId === Number(book.id));
    
    return {
      ...book, // all of the book information
      authorName: author?.name ?? 'Unknown author',
      reviewCount: allReviews.length,
    }
  });
  
  // TODO: Return display objects for the book list.
  return result;
}

function renderCatalog(catalog) {
  // TODO: Render one button per book.
  button.dataset.bookId = book.id;
  // TODO: Mark the selected book with aria-current.
  button.setAttribute('aria-current', String(book.id === selectedBookId))
  // TODO: Store the book id in a data attribute.
}

async function loadCatalog() {
  // TODO: Load books, authors, and reviews with Promise.all().
  // The Promise.all() will run all these async functions to completion
  // Each function call will be able to fire asynchronously, but by
  // awaiting the Promise.all(), our code will pause until all the results are in.
  const [books, authors, reviews] = await Promise.all([
    fetchJson(buildEndpoint('/books')),
    fetchJson(buildEndpoint('/authors')),
    fetchJson(buildEndpoint('/reviews')),
  ]);
  // TODO: Synthesize the API responses into one catalog list.
  const catalog = synthesizeCatalog(books, authors, reviews);

  // TODO: Render the catalog and select the first book.
  renderCatalog(catalog);
  // TODO: Show loading, success, empty, and error states.
}

function renderBookDetails(book, author, summaryHtml, jacketUrl) {
  // TODO: Render title, metadata, author bio, markdown summary, and jacket image.
}

function renderReviews(reviews) {
  // TODO: Render an empty state when there are no reviews.
  // TODO: Render editable review cards for existing reviews.
}

async function selectBook(bookId) {
  selectedBookId = bookId;

  // TODO: Fetch the selected book, its author, its reviews, its markdown summary, and its jacket image.
  // TODO: Use response.text() for markdown and markdown-it to render it.
  // TODO: Use response.blob() and URL.createObjectURL() for the jacket image.
  // TODO: Re-render the catalog so the selected book is marked.
}

async function addReview(event) {
  event.preventDefault();

  // TODO: Collect FormData.
  // TODO: POST the review to /reviews.
  // TODO: Reset the form and refresh the selected book.
}

async function updateReview(reviewId, form) {
  // TODO: Collect rating and comment from the edit form.
  // TODO: PATCH /reviews/:id.
  // TODO: Refresh the selected book.
}

async function deleteReview(reviewId) {
  // TODO: DELETE /reviews/:id.
  // TODO: Refresh the catalog and selected book.
}

bookList.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-book-id]');

  if (button) {
    selectBook(button.dataset.bookId);
  }
});

reviewList.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  updateReview(form.dataset.reviewId, form);
});

reviewList.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-delete-review]');

  if (button) {
    deleteReview(button.dataset.deleteReview);
  }
});

loadButton.addEventListener('click', loadCatalog);
addReviewForm.addEventListener('submit', addReview);

loadCatalog();

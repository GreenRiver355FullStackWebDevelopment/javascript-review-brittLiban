//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];



/////////////////////////////////////////////////////////////////////

//Your Code Below Here////

// bring in the average rating function
import { calculateStarAverage } from './logic.js';


// get elements from the DOM
const reviewsContainer = document.querySelector('.reviews');

const form = document.querySelector('form');
const starRatingDisplay = document.querySelector('.starRating');

// function to show one review on the page
function renderReview(review) {
  const div = document.createElement('div');
  div.className = 'review_container';

  div.innerHTML = `
    <img src="${review.image}" />
    <div>
      <p>${review.username}</p>
      <p>${review.star} </p>
      <p>${review.review}</p>
    </div>
  `;

  reviewsContainer.appendChild(div);
}

// render all reviews
function renderAllReviews() {
  reviewsContainer.innerHTML = '';
  reviews.forEach(renderReview);
}

// update star average
function updateStarAverage() {
  const avg = calculateStarAverage(reviews);

  starRatingDisplay.textContent = `Average Rating: ${avg.toFixed(1)}`;
}

// handle form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = form.username.value;
  const star = parseFloat(document.querySelector('#star').value);

  const review = form.review.value;
  const image = form.image.value || './images/default.jpg';

  const newReview = {
    username,
    star,
    review,
    image
  };

  reviews.push(newReview);
  renderReview(newReview);
  updateStarAverage();

  form.reset();
});

// initial load
renderAllReviews();
updateStarAverage();







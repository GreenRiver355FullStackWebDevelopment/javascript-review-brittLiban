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

import calculateStarAverage from './logic.js'

const reviewsSection = document.querySelector(".reviews");

let renderReviews = (review) => {

  let review_container = document.createElement('div');
  review_container.classList.add("review_container");


  let img = document.createElement('img');
  img.src = `${review.image}`
  review_container.append(img);

  let loopDiv = document.createElement('div');
  review_container.append(loopDiv);


  let p = document.createElement('p')
  p.textContent = review.username;
  loopDiv.append(p);

  let p2 = document.createElement('p');
  p2.textContent = "It was this many starts --> " + review.star;
  loopDiv.append(p2);

  let p3 = document.createElement('p');
  p3.textContent = "Review: " + review.review;
  loopDiv.append(p3);

  
  reviewsSection.append(review_container);
  

};

calculateStarAverage(reviews.map(review => review.star));
reviews.forEach(renderReviews);





// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(response =>{
    const allArticles = Object.entries(response.data.articles);
    const cardsCont = document.querySelector(".cards-container");
    for (const [articles,array] of allArticles){
       array.forEach(item =>{
           cardsCont.appendChild(createCards(item.headline,item.authorPhoto,item.authorName));
       });
    };
});

function createCards(headline,authorImg,authorName){
    const cardBox = document.createElement("div"),
    cardHead = document.createElement("div"),
    cardAuthor = document.createElement("div"),
    cardImgBox = document.createElement("div"),
    cardImg = document.createElement("img"),
    cardName = document.createElement("span");

    cardBox.appendChild(cardHead);
    cardBox.appendChild(cardAuthor);
    cardAuthor.appendChild(cardImgBox);
    cardAuthor.appendChild(cardName);
    cardImgBox.appendChild(cardImg);

    cardBox.classList.add("card");
    cardHead.classList.add("headline");
    cardAuthor.classList.add("author");
    cardImgBox.classList.add("img-container");
    
    cardHead.textContent = headline;
    cardImg.src = authorImg;
    cardName.textContent = authorName;

    return cardBox;

}
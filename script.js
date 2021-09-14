const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotes = document.getElementById("newQuotes");

let realData = "";
let quotesData = "";
const getNewQuotes = () => {
  let randomNumber = Math.floor(Math.random() * 1643);
  quotesData = realData[randomNumber];
  // console.log(realData[randomNumber].text);
  quotes.innerText = `${quotesData.text}`;

  author.innerText = `${quotesData.author}`;
};

const getQuotes = async () => {
  const API = "https://type.fit/api/quotes";
  try {
    let data = await fetch(API);
    realData = await data.json();

    getNewQuotes();
  } catch (error) {}
};
newQuotes.addEventListener("click", getNewQuotes);
getQuotes();

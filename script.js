const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "If you are working on something exciting, it will keep you motivated.",
    author: "Steve Jobs",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
];

function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  const tweetBtn = document.getElementById("tweetBtn");

  setTimeout(() => {
    quoteEl.innerText = quotes[randomIndex].text;
    authorEl.innerText = "— " + quotes[randomIndex].author;
    const tweetText = `${quotes[randomIndex].text} — ${quotes[randomIndex].author}`;
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
  }, 300);
}

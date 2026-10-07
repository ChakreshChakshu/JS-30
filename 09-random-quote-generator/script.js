const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", tag: "Passion" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds", tag: "Engineering" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson", tag: "Clean Code" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson", tag: "Problem Solving" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra", tag: "Architecture" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck", tag: "Agile" },
  { text: "Knowledge is power.", author: "Francis Bacon", tag: "Learning" },
  { text: "The most dangerous phrase in the language is: We've always done it this way.", author: "Grace Hopper", tag: "Innovation" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela", tag: "Perseverance" },
  { text: "Imagination is more important than knowledge.", author: "Albert Einstein", tag: "Creativity" },
  { text: "The function of good software is to make the complex appear to be simple.", author: "Grady Booch", tag: "Design" },
  { text: "Stay hungry, stay foolish.", author: "Stewart Brand", tag: "Wisdom" }
];

let lastIndex = -1;

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteTag = document.getElementById("quoteTag");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");

function getRandomQuote() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === lastIndex && quotes.length > 1);

  lastIndex = newIndex;
  return quotes[newIndex];
}

function displayQuote() {
  const quote = getRandomQuote();
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.innerHTML = `&mdash; ${quote.author}`;
  quoteTag.textContent = quote.tag;
}

newQuoteBtn.addEventListener("click", displayQuote);

copyBtn.addEventListener("click", () => {
  const fullText = `${quoteText.textContent} ${quoteAuthor.textContent}`;
  navigator.clipboard.writeText(fullText).then(() => {
    const original = copyBtn.textContent;
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = original), 1500);
  });
});

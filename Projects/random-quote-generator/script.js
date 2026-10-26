
const newQuoteBtn = document.getElementById("newQuoteBtn");
const resetBtn = document.getElementById("resetBtn");

const quoteText = document.getElementById("quoteText");
const authorText = document.getElementById("authorText");

// Create an array of quotes
const quotes = [
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        text: "Success is the sum of small efforts repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    }
];

// Function to display a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    const selectedQuote = quotes[randomIndex];

    quoteText.textContent = selectedQuote.text;
    authorText.textContent = "---" + selectedQuote.author;
}

// Function to reset the quote
function resetQuote() {
    quoteText.textContent="Believe you can and you're halfway there"
    authorText.textContent = "Theodore Roosevelt"
}

// Add event listeners
newQuoteBtn.addEventListener("click", generateQuote);
resetBtn.addEventListener("click", resetQuote);

const quotes = [
    "The journey of a thousand miles begins with one step.",
    "Take care of your body. It's the only place you have to live.",
    "Health is not just about what you're eating. It's also about what you're thinking and saying.",
    "You are stronger than you think.",
    "Believe you can and you're halfway there."
];

function displayDailyQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}



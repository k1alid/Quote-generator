const quotes = [
    "Dream big, work hard.",
    "Be the change you wish to see in the world. - Mahatma Gandhi",
    "In the end, we only regret the chances we didn't take.",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is short, make it sweet.",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Every moment is a fresh beginning. - T.S. Eliot",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "Where there is love, there is life. - Mahatma Gandhi",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "Everything you can imagine is real. - Pablo Picasso",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

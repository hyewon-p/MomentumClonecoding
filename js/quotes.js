const quotes = [
    {
        quote: "All that glitters is not gold.",
        author: "William Shakespeare",
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche",

    },
    {
        quote: "We must not allow other people’s limited perceptions to define us.",
        author: "Virginia Satir",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "If you cannot do great things, do small things in a great way.",
        author: "Napoleon Hill",
    },
    {
        quote: "If opportunity doesn’t knock, build a door.",
        author: "Milton Berle",
    },
    {
        quote: "Do not let what you cannot do interfere with what you can do.",
        author: "John Wooden",
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky",
    },
    {
        quote: "It takes courage to grow up and turn out to be who you really are.",
        author: "E.E. Cummings",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `-${todaysQuote.author}`;
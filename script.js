const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteBtn = document.getElementById("quoteBtn");

function getQuote() {

    quote.textContent = "Loading...";
    author.textContent = "";

    fetch("https://dummyjson.com/quotes/random")

        .then(function(response) {

            if (!response.ok) {
                throw new Error("Failed to fetch quote");
            }

            return response.json();
        })

        .then(function(data) {

            // DOM manipulation
            quote.textContent = `"${data.quote}"`;
            author.textContent = `— ${data.author}`;

        })

        .catch(function(error) {

            quote.textContent = "Oops! Something went wrong.";
            author.textContent = "";

            console.log(error);
        });
}

quoteBtn.addEventListener("click", getQuote);

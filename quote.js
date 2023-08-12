let url = "https://zenquotes.io/api/random";

fetch(url)
    .then(response => response.json())
    .then(function(quote) {
      
      let text = document.querySelector("#quote");
      text.innerHTML = quote.quote;

      let source = document.querySelector("#source");
      source.innerHTML = `- ${quote.author}`;
    })

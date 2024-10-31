document.addEventListener("DOMContentLoaded", () => {
    const quoteText = document.querySelector(".quote"),
          authorName = document.querySelector(".author .name"),
          quoteBtn = document.querySelector("button"),
          soundBtn = document.querySelector(".sound"),
          copyBtn = document.querySelector(".copy"),
          xBtn = document.querySelector(".x");

    // Function to get a random quote from the API
    async function fetchRandomQuote() {
        try {
            quoteBtn.classList.add("loading");
            quoteBtn.innerText = "Loading...";
            const response = await fetch("https://api.quotable.io/random");
            if (!response.ok) throw new Error("Failed to fetch quote");
            const data = await response.json();
            quoteText.innerText = `"${data.content}"`;
            authorName.innerText = data.author || "Unknown";
            quoteBtn.innerText = "New Quote";
        } catch (error) {
            quoteText.innerText = "Oops! Could not fetch a quote.";
            authorName.innerText = "Unknown";
            console.error(error);
        } finally {
            quoteBtn.classList.remove("loading");
        }
    }

    // Event listeners
    quoteBtn.addEventListener("click", fetchRandomQuote);

    soundBtn.addEventListener("click", () => {
        const utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        speechSynthesis.speak(utterance);
    });

    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(quoteText.innerText)
            .then(() => alert("Quote copied to clipboard"))
            .catch(err => console.error("Failed to copy:", err));
    });

    xBtn.addEventListener("click", () => {
        const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText.innerText + " - " + authorName.innerText)}`;
        window.open(xUrl, "_blank");
    });

    // Load a quote on page load
    fetchRandomQuote();
});

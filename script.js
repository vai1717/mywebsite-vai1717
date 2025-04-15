// Q2: Capture clicks and views

document.addEventListener("DOMContentLoaded", () => {

  console.log(`${new Date().toISOString()}, view, page loaded`);

  document.body.addEventListener("click", function (event) {
    const target = event.target;
    let objType = "unknown";

  
    if (target.tagName.toLowerCase() === "img") {
      objType = "image";
    } else if (target.classList.contains("dropdown-label") || target.closest(".dropdown-content")) {
      objType = "dropdown";
    } else if (target.tagName.toLowerCase() === "p" || target.tagName.toLowerCase() === "span") {
      objType = "text";
    } else if (target.tagName.toLowerCase() === "a") {
      objType = "link";
    } else if (target.tagName.toLowerCase() === "button") {
      objType = "button";
    }


    console.log(`${new Date().toISOString()}, click, ${objType}`);
  });

  const observeElements = document.querySelectorAll("img, .dropdown-card, .hometown-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let objType = "unknown";
        if (entry.target.tagName.toLowerCase() === "img") objType = "image";
        else if (entry.target.classList.contains("dropdown-card")) objType = "dropdown";
        else if (entry.target.classList.contains("hometown-card")) objType = "gallery";
        console.log(`${new Date().toISOString()}, view, ${objType}`);
        observer.unobserve(entry.target); // Log once when visible
      }
    });
  }, { threshold: 0.5 });

  observeElements.forEach(element => observer.observe(element));
});
  
  // Q3: Text Analysis
  function analyzeText() {
    const text = document.getElementById("textInput").value;
  
    const letterCount = (text.match(/[a-zA-Z]/g) || []).length;
    const wordCount = (text.match(/\b\w+\b/g) || []).length;
    const spaceCount = (text.match(/ /g) || []).length;
    const newlineCount = (text.match(/\n/g) || []).length;
    const specialSymbols = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
  
    const output = [];
  
    output.push(`Letters: ${letterCount}`);
    output.push(`Words: ${wordCount}`);
    output.push(`Spaces: ${spaceCount}`);
    output.push(`Newlines: ${newlineCount}`);
    output.push(`Special Symbols: ${specialSymbols}`);
  
    // More comprehensive lists
    const pronouns = [
      "i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them",
      "my", "your", "his", "her", "its", "our", "their", "mine", "yours", "hers", "ours", "theirs",
      "myself", "yourself", "himself", "herself", "itself", "ourselves", "yourselves", "themselves"
    ];
  
    const prepositions = [
      "about", "above", "across", "after", "against", "along", "among", "around", "at",
      "before", "behind", "below", "beneath", "beside", "between", "beyond", "but", "by",
      "concerning", "considering", "despite", "down", "during", "except", "for", "from", 
      "in", "inside", "into", "like", "near", "of", "off", "on", "onto", "out", "outside", 
      "over", "past", "regarding", "since", "through", "throughout", "to", "toward", 
      "under", "underneath", "until", "up", "upon", "with", "within", "without"
    ];
  
    const articles = ["a", "an"];
  
    function countTokens(group, label) {
      const map = {};
      for (const token of group) {
        const regex = new RegExp(`\\b${token}\\b`, "gi");
        const matches = text.match(regex);
        map[token] = matches ? matches.length : 0;
      }
      output.push(`\n${label}:`);
      for (const token in map) {
        output.push(`${token}: ${map[token]}`);
      }
    }
  
    countTokens(pronouns, "Pronouns");
    countTokens(prepositions, "Prepositions");
    countTokens(articles, "Indefinite Articles");
  
    document.getElementById("output").innerText = output.join("\n");
  }
  
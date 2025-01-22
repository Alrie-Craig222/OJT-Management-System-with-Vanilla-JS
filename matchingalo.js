const items = [
    "Apple",
    "Banana",
    "banene",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ];
  
  document.getElementById("searchButton").addEventListener("click", () => {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
  
    // Clear previous results
    resultsContainer.innerHTML = "";
  
    // Filter items based on the search term
    const matchingResults = items.filter(item =>
      item.toLowerCase().includes(searchTerm)
    );
  
    // Display results
    if (matchingResults.length > 0) {
      matchingResults.forEach(result => {
        const li = document.createElement("li");
        li.textContent = result;
        resultsContainer.appendChild(li);
      });
    } else {
      resultsContainer.innerHTML = "<li>No matches found</li>";
    }
  });
  
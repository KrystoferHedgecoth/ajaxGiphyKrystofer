// Selectors for the gif area and search input
const gifContainer = $("#gif-area");
const searchField = $("#search");

// Function to add a gif to the page
function displayGif(result) {
 const totalGifs = result.data.length;
 if (totalGifs) {
    const randomIndex = Math.floor(Math.random() * totalGifs);
    const newColumn = $("<div>", { class: "col-md-4 col-12 mb-4" });
    const newGifImage = $("<img>", {
      src: result.data[randomIndex].images.original.url,
      class: "w-100"
    });
    newColumn.append(newGifImage);
    gifContainer.append(newColumn);
 }
}

// Event listener for form submission
$("form").on("submit", async function(event) {
 event.preventDefault();

 const searchQuery = searchField.val();
 searchField.val("");

 const apiResponse = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchQuery,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
 });
 displayGif(apiResponse.data);
});

// Event listener to remove all gifs
$("#remove").on("click", function() {
 gifContainer.empty();
});
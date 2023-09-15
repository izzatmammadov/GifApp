const stickerContainer = document.querySelector("#sticker-container");
const searchInput = document.querySelector("#search-input");

function searchStickers() {
  const apiKey = "o7eH46H0APmDPmppXNdR4eeY97IGDtJl";
  const stickerName = searchInput.value;
  const limit = 8;

  const apiUrl = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${stickerName}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      stickerContainer.innerHTML = "";
      searchInput.value = "";

      data.data.forEach((sticker) => {
        const stickerDiv = document.createElement("div");
        stickerDiv.classList.add("card");

        const stickerImg = document.createElement("img");
        stickerImg.src = sticker.images.fixed_height.url;
        stickerImg.alt = sticker.title;

        stickerDiv.appendChild(stickerImg);
        stickerContainer.appendChild(stickerDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching stickers:", error);
    });
}

searchInput.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    searchStickers();
  }
});

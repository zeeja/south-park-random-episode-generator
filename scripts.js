document.getElementById("generate-btn").addEventListener("click", generateRandomEpisode);

let episodes = [];

fetch("southpark_episodes.csv")
  .then((response) => response.text())
  .then((data) => {
    const parsedData = Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
    });

    episodes = parsedData.data;
  })
  .catch((error) => {
    console.error("Error fetching episode data:", error);
  });

function generateRandomEpisode() {
  if (episodes.length === 0) {
    alert("No episodes available.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * episodes.length);
  const randomEpisode = episodes[randomIndex];

  document.getElementById("episode-title").textContent = randomEpisode.Title;
  document.getElementById("episode-season").textContent = `Season ${randomEpisode.Season}, Episode ${randomEpisode.Episode}`;
  document.getElementById("episode-summary").textContent = randomEpisode.Description;
}

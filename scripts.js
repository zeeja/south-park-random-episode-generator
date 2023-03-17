document.getElementById("generate-btn").addEventListener("click", generateRandomEpisode);

const episodes = [
  {
    title: "Kunstliche Intelligenz",
    season: 26,
    episode: 4,
    summary: "Stan gerat ins Taumeln, als an der Schule ein Betrugsskandal bekannt wird."
  },
  {
    title: "City People",
    season: 25,
    episode: 3,
    summary: "When Cartman's mum gets a job as a real estate agent, Cartman becomes inspired to enter the game himself... It's not long before all hell breaks loose!."
  },
  {
    title: "The Big Fix",
    season: 25,
    episode: 2,
    summary: "Stan's horrified to realise he's minsinterpreted some of the greatest writing of all time. Randy attends a cannabis expo where he discovers a shocking fact... can Token help?."
  },
  {
    title: "Black Friday",
    season: 17,
    episode: 7,
    summary: "With Black Friday, the angriest shopping day of the year approaching, Wizard Cartman deems it necessary to form alliances in his quest for a new gaming console, but who can he trust during these dark times."
  }
  // Add more episodes here, separated by commas
];


function generateRandomEpisode() {
  const randomIndex = Math.floor(Math.random() * episodes.length);
  const randomEpisode = episodes[randomIndex];

  document.getElementById("episode-title").textContent = randomEpisode.title;
  document.getElementById("episode-season").textContent = `Season ${randomEpisode.season}, Episode ${randomEpisode.episode}`;
  document.getElementById("episode-summary").textContent = randomEpisode.summary;
}


  
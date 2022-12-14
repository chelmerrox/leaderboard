export const recentScoresContainer = document.querySelector('.recent-scores-container');

const scoresAPIURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sZFhupVBKPQG0DoGJb3U/scores/';

// Display the name & scores on the site
const displayScores = (data) => {
  const recentScoreDiv = document.createElement('div');
  recentScoreDiv.classList.add('recent-score');

  data.forEach((userdata) => {
    recentScoreDiv.innerHTML += `<p>${userdata.user}: ${userdata.score}</p>`;

    recentScoresContainer.appendChild(recentScoreDiv);
  });
};

// GET method (for Get all scores)
export const getAllScores = async () => {
  const options = {
    method: 'GET',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  };

  await fetch(scoresAPIURL, options)
    .then((response) => response.json())
    .then((data) => displayScores(data.result));
};

// POST method (Create)
export const addScore = async (userNameVal, userScoreVal) => {
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      user: userNameVal,
      score: userScoreVal,
    }),
  };

  await fetch(scoresAPIURL, options)
    .then((response) => response.json());

  recentScoresContainer.innerHTML = '';

  getAllScores();
};
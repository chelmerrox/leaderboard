import { recentScoresContainer, userNameVal, userScoreVal } from './../index.js';

// Display the name & scores on the site
const displayScores = (data) => {
  const recentScoreDiv = document.createElement('div');
  recentScoreDiv.classList.add('recent-score');

  data.forEach((userdata, i) => {
    recentScoreDiv.innerHTML += `<p>${userdata.user}: ${userdata.score}</p>`;

    recentScoresContainer.appendChild(recentScoreDiv);
  });

  const pArray = Array.from(document.querySelectorAll('p'));
  
  pArray.forEach((element, j) => {
    if (j%2 === 0){
      element.classList.add('grey');
    } else {
      element.classList.remove('grey');
    }
  })
};

// GET method (for Get all scores)
export const getAllScores = async () => {
  const options = {
    method: "GET",
    headers: { "Content-type": "application/json; charset=UTF-8"},
  };

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sZFhupVBKPQG0DoGJb3U/scores/', options)
    .then((response) => response.json())
    .then((data) => displayScores(data.result));
}

// POST method (Create)
export const addScore = async () => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({ 
      user: userNameVal,
      score: userScoreVal
    })
  };

  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sZFhupVBKPQG0DoGJb3U/scores/', options);
  const data = await response.json();

  recentScoresContainer.innerHTML = '';

  getAllScores();
};
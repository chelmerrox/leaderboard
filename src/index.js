import './style.css';
import { getAllScores, addScore } from './modules/api-methods.js';

const form = document.querySelector('.form');
const userNameField = document.querySelector('.user-name-field');
const userScoreField = document.querySelector('.user-score-field');
export let userNameVal;
export let userScoreVal;
const refreshBtn = document.querySelector('.refresh-btn');
export const recentScoresContainer = document.querySelector('.recent-scores-container');

// Endpoint with the id of my game: A game
const leaderboardAPIURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sZFhupVBKPQG0DoGJb3U/';

getAllScores();

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();

  recentScoresContainer.innerHTML = '';

  getAllScores();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  userNameVal = userNameField.value;
  userScoreVal = userScoreField.value;

  addScore();

  form.reset();
});

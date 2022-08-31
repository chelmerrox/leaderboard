import './style.css';
import { getAllScores, addScore } from './modules/api-methods.js';

const form = document.querySelector('.form');
const refreshBtn = document.querySelector('.refresh-btn');
export const recentScoresContainer = document.querySelector('.recent-scores-container');

getAllScores();

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();

  recentScoresContainer.innerHTML = '';

  getAllScores();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userNameVal = document.querySelector('.user-name-field').value;
  const userScoreVal = document.querySelector('.user-score-field').value;

  addScore(userNameVal, userScoreVal);

  form.reset();
});

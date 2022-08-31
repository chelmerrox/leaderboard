import './style.css';
import { recentScoresContainer, getAllScores, addScore } from './modules/api-methods.js';

const form = document.querySelector('.form');
const refreshBtn = document.querySelector('.refresh-btn');

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

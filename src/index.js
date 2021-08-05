// import html from './index.html';
import './style.css';
import './bootstrap.css';
import * as API from './apiData.js';

const refreshScores = async () => {
  const scores = await API.getScores();
  const ul = document.getElementById('score');

  ul.innerHTML = '';

  scores.result.forEach((score) => {
    const li = document.createElement('li');
    li.innerText = `${score.user}: ${score.score}`;
    ul.appendChild(li);
  });
};

window.addEventListener('load', async () => {
  const refreshBtn = document.getElementById('refresh-btn');
  const form = document.getElementById('add-a-score');
  const nameInput = document.getElementById('name-input');
  const scoreInput = document.getElementById('score-input');

  refreshBtn.addEventListener('click', async () => {
    refreshScores();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const user = nameInput.value;
    const score = Number(scoreInput.value);

    await API.addScore(user, score);
    await refreshScores();

    form.reset();
  });

  await refreshScores();
});
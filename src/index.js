// import html from './index.html';
import './style.css';
import * as ApiData from './apiData.js';

const GAME = 'tower';

const displayScore = (score = []) => {
  const ul = document.getElementById('score');
  ul.innerHTML = '';

  score.forEach(({
    user,
    score,
  }) => {
    const li = document.createElement('li');
    li.innerText = `${score[user]}`;
  });
};

window.addEventListener('load', async () => {
  const id = await ApiData.createGame(GAME);
  const refreshBtn = document.getElementById('refresh-btn');
  const form = document.getElementById('add-a-score');

  const refreshScores = async () => {
    const scores = await ApiData.fetchScores(id, refreshBtn);
    displayScore(scores);
  };

  refreshBtn.addEventListener('click', refreshScores);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameInput = form.el[0];
    const scoreInput = form.el[1];

    const data = {
      user: nameInput.value,
      score: scoreInput.value,
    };

    await ApiData.submitScore(id, data);
    await refreshScores();

    form.reset();
  });
});
// import html from './index.html';
import './style.css';

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const GAME = 'tower';

const displayScore = (score = []) => {
  const ol = document.getElementById('score');
  ol.innerHTML = '';

  score.forEach(({
    user,
    score,
  }) => {
    const li = document.createElement('li');
    li.innerText = `${score[user]}`;
  });
};

window.addEventListener('load', async () => {
  const id = await API.createGame(GAME);
  const refreshBtn = document.getElementById('refresh-btn');
  const form = document.getElementById('add-a-score');

  const refreshScores = async () => {
    const scores = await API.fetchScores(id, refreshBtn);
    displayScores(scores);
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

    await API.submitScore(id, data);
    await refreshScores();

    form.reset();
  });
});
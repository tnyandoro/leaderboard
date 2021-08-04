// import html from './index.html';
import './style.css';

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const GAME = 'tower';

const displayScore = (score = []) => {
  const ol = document.getElementById('score');
  ol.innerHTML = '';

  score.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.innerText = `${score[user]}`;
  });
};

window.addEventListener('load', () => {
  const ol = document.querySelector('#score');
  new Array(6).fill(1).forEach((_, index) => {
    const li = document.createElement('li');
    li.innerText = `Name: ${index}`;
    ol.appendChild(li);
  });
});


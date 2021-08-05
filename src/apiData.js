const API_URL = 'http://us-central1-js-capstone-backend.cloudfunctions.net/api';
// eslint-disable-next-line no-unused-vars
const GAME_NAME = 'TendaiGame';
const GAME_ID = 'q8ry2kihulqdgF3R45SQ';

export const addScore = async (user, score) => {
  const data = {};
  data.user = user;
  data.score = score;
  const result = await fetch(`${API_URL}/games/${GAME_ID}/scores`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
  return result;
};

export const getScores = async () => {
  const result = await fetch(`${API_URL}/games/${GAME_ID}/scores`)
    .then((response) => response.json());
  return result;
};
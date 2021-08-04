const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
// eslint-disable-next-line no-unused-vars
const GAME_NAME = 'TendaiGame';
const GAME_ID = 'q8ry2kihulqdgF3R45SQ';

export const addScore = async (user, score) => {
  const response = await fetch(`${API_URL}/${GAME_ID}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
  });
  return response.json();
};

export const getScores = async () => {
  const response = await fetch(`${API_URL}/${GAME_ID}/scores`);
  return response.json();
};
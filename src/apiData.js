import { import } from 'components'
class ApiData {
  constructor(http) {
    this.http = http;
  }

  createGame = async (name) => {
    const {
      result,
    } = await post('games', {
      name,
    });
    const id = parseId(result);
    return id;
  };

  fetchScores = async (id) => {
    const {
      result,
    } = await get(`games/${id}/scores/`);
    return result;
  };

  submitScore = async (id, data) => {
    const {
      result,
    } = await post(`games/${id}/scores/`, data);
    return result;
  };
}

export default ApiData;
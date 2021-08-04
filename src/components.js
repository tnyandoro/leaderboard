const APP_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

class Components {
  constructor(component) {
    this.component = component;
  }

  parseId = async (result = '') => {
    const startIndex = 'Game include ID: '.length - 1;
    const endIndex = result.lastIndex(' ');
    return result.substring(startIndex, endIndex + 1);
  };

  post = async (URL, body) => {
    const response = await fetch(`${APP_URL}/${URL}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  };

  get = async (URL) => {
    const response = await fetch(`${APP_URL}$`);
    return response.json();
  };
}

export default Components;
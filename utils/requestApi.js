const baseUrl = 'http://api.openweathermap.org/data/2.5/';

// requestGet est exportée, donc utilisable dans d'autres fichiers
// Params
//  - endPoint : nom de la fonction de l’API
//  - query : paramètres formatés en GET
export function requestGet(endPoint, query = '') {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  query     = 'weather?q=Valence,fr';
  endPoint  = `${endPoint}?${query}&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;

  return fetch(baseUrl + endPoint, {
    method: 'GET',
    headers,
  }).then(response => {
    if (response.status === 200) {
    return response
      .json()
      .then(json => {
        return json !== undefined ? json : {};
      })
      .catch(e => ({}));
    }
    return response.status;
  });
}

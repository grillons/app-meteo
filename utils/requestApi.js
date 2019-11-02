// TODO : better code to these global var
const baseUrl = '';
const apiKey = '';

// requestGet est exportée, donc utilisable dans d'autres fichiers
// Params
//  - endPoint : nom de la fonction de l’API
//  - query : paramètres formatés en GET
export function requestGet(endPoint, query = '') {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  endPoint = `${endPoint}?${query}&APPID=${apiKey}`;

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

export function fetchJsonData(endpoint) {
  // TODO: Use fetch(endpoint), then pass the response to handleResponse().
  return fetch(endpoint) // that endpoint is some URL
    .then(handleResponse);
}

function handleResponse(response) {
  // TODO: Check response.ok. the .ok is a boolean
  if (!response.ok) {
    // the response was NOT ok
    const message = `Server responded with ${response.status} (${response.statusText})`;
    // TODO: Throw an Error when the server response failed.
    throw new Error(message);
  }
  // TODO: Return response.json().
  return response.json(); // .json() will convert the JSON data to a JavaScript object
}

export async function postData(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
}

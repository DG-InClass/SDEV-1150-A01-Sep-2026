function describeResponseProblem(response, detail) {
  const message = `${response.status} ${response.statusText} from ${response.url}`;
  return detail ? `${message}. ${detail}` : message;
}

function getContentType(response) {
  return response.headers.get('content-type') ?? '';
}

function assertOk(response) {
  if (!response.ok) {
    throw new Error(describeResponseProblem(response));
  }
}

function assertContentType(response, expectedType) {
  const contentType = getContentType(response);

  if (!contentType.includes(expectedType)) {
    const detail = `Expected ${expectedType}, but received ${contentType || 'no content type'}`;
    throw new Error(describeResponseProblem(response, detail));
  }
}

export async function fetchJson(endpoint) {
  // Async/Await approach
  const response = await fetch(endpoint);
  assertOk(response);
  assertContentType(response, 'application/json');
  return response.json();
}

export async function fetchText(endpoint, expectedType) {
  const response = await fetch(endpoint);
  assertOk(response);
  assertContentType(response, expectedType);
  return response.text();
}

export async function fetchBlob(endpoint, expectedType) {
  const response = await fetch(endpoint);
  assertOk(response);
  assertContentType(response, expectedType);
  return response.blob(); // Binary large object - such as images, zip files, etc.
}

export async function sendJson(endpoint, options) {
  // The options allow us to use this for any kind of POST, PUT, or DELETE call
  // TODO: merge method, headers, and JSON body options into a fetch() call.
  const fetchOptions = {
    ...options, // spread operator to destructure (unpack) the options object
    headers : {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}), // spread operator to unpack the options.headers, OR {}
    }
  }
  if (options.body && typeof options.body === 'object') {
    fetchOptions.body = JSON.stringify(options.body); // Ensure I am sending JSON
  }

  // TODO: reuse the same response.ok and content-type checks.
  const response = await fetch(endpoint, fetchOptions);
  assertOk(response);
  assertContentType(response, 'application/json');

  // TODO: return parsed JSON when the API sends JSON back.
  return response.json(); // Convert the JSON response to a JavaScript object
}

export { describeResponseProblem, getContentType };

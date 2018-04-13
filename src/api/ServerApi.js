const BACKEND_URL = "http://localhost:3001";

function status(response) {
  if (response.ok) {
    return response;
  } else {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json().then(body => {
        return Promise.reject({ ...body, status: response.status });
      });
    } else {
      return Promise.reject({ message: response.statusText });
    }
  }
}

function json(response) {
  if (response.status !== 204) {
    return response.json();
  }
}

class ServerApi {
  constructor() {
    this.opts = bodyExist => ({
      headers: {
        Accept: 'application/json',
        ...(bodyExist ? { 'Content-type': 'application/json' } : {})
      },
      credentials: 'include'
    });
    this.bodyConverter = body => JSON.stringify(body);
  }

  buildUrl(path) {
    return `${BACKEND_URL}${path}`;
  }

  /**
   * Make GET ajax request.
   * @param url - requested url
   * @returns {Promise.<TResult>}
   */
  get(url) {
    return fetch(this.buildUrl(url), {
      method: 'get',
      ...this.opts(false)
    })
      .then(status)
      .then(json);
  }

  /**
   * Make POST ajax request.
   * @param url - requested url
   * @param body - object {key: value}
   * @returns {Promise.<TResult>}
   */
  post(url, body) {
    return fetch(this.buildUrl(url), {
      method: 'post',
      ...this.opts(body),
      body: this.bodyConverter(body)
    })
      .then(status)
      .then(json);
  }

  /**
   * Make PUT ajax request.
   * @param url - requested url
   * @param body - object {key: value}
   * @returns {Promise.<TResult>}
   */
  put(url, body) {
    return fetch(this.buildUrl(url), {
      method: 'put',
      ...this.opts(body),
      body: this.bodyConverter(body)
    })
      .then(status)
      .then(json);
  }

  /**
   * Make DELETE ajax request.
   * @param url - requested url
   * @param body - object {key: value}
   * @returns {Promise.<TResult>}
   */
  delete(url, body) {
    return fetch(this.buildUrl(url), {
      method: 'delete',
      ...this.opts(body),
      body: this.bodyConverter(body)
    })
      .then(status)
      .then(json);
  }
}

export default ServerApi;

const ROOT = process.env.API_ROOT || "http://localhost:3000/";

export const fetch = (url, data = null) => {
  if (data) {
    return fetch(ROOT + url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(results => results.json());
  } else {
    return fetch(ROOT + url).then(results => results.json());
  }
};

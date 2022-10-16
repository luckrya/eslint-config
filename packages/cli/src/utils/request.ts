import type { RequestInit } from "node-fetch";

import fetch from "node-fetch";

function request(url: string, options: RequestInit): Promise<any> {
  return fetch(url, options).then((res) => res.json());
}

function get(url: string, requestOptions: Omit<RequestInit, "method"> = {}) {
  return request(url, {
    ...requestOptions,
    method: "GET",
  });
}

export default {
  get,
};

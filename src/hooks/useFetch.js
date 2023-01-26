const BASE_URL = "https://api.shrtco.de/v2/shorten?url=";

export default async function useFetch(url) {
  if (url === null) return;
  const response = await fetch(BASE_URL + url);
  const data = await response.json();
  return [data];
}

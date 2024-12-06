const API_Key = '47439400-a7b90577fcfc36b5c66ee25ec';
const BASE_URL = 'https://pixabay.com/api/';
export function fetchData(value) {
  const params = new URLSearchParams({
    key: API_Key,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

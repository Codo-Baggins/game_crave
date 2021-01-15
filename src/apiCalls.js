export const fetchGameData = (gameName, key) => {
  return fetch(
    `https://api.rawg.io/api/games/${gameName}?key=${key}`
  ).then((response) => {
    console.log(response);
    if (!response.ok) {
      throw Error("Failed to fetch data for the requested game.");
    }
    return response.json();
  });
};

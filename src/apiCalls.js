const apiKey = process.env.REACT_APP_RAWG_API_KEY;

export const fetchGameData = (gameName) => {
  return fetch(`https://api.rawg.io/api/games/${gameName}?key=${apiKey}`).then(
    (response) => {
      if (!response.ok) {
        throw Error("Failed to fetch data for the requested game.");
      }
      return response.json();
    }
  );
};

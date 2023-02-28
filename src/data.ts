export type Games = {
  id: number;
  name: string;
  price: number;
  link: string;
  released: string;
  platforms: any[];
  genres: any[];
  developers: string[];
  publishers: string[];
  background_image: string;
  short_screenshots: string[];
};

const API_KEY = import.meta.env.VITE_API_KEY;
const PAGE_NUMBER = Math.floor(Math.random() * 10);
const API_URL = `https://api.rawg.io/api/games?key=${API_KEY}&page=${PAGE_NUMBER}&page_size=40`;

const getData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const storeFilter: Games[] = data.results.map((game: Games) => {
    return {
      id: game.id,
      name: game.name,
      price: Math.floor(Math.random() * 100),
      platforms: game.platforms,
      genres: game.genres,
      background_image: game.background_image,
    };
  });
  return storeFilter;
};

export default getData;

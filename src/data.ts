type Developers = {
  games_count: number
  id: number
  image_background: string
  name: string
  slug: string 
}

type Publishers = {
  games_count: number
  id: number
  image_background: string
  name: string
  slug: string
}

type Platforms = {
  platform: {
    games_count: number
    id: number
    image_background: string
    name: string
    slug: string
    year_end: number
    year_start: number
  }
  released_at: string
  requirements_en: null
  requirements_ru: null
}

type Genres = {
  games_count: number
  id: number
  image_background: string
  name: string
  slug: string
}

export type Games = {
  id: number;
  name: string;
  price: number;
  link: string;
  released: string;
  platforms: Platforms[];
  genres: Genres[];
  developers: Developers[];
  publishers: Publishers[];
  background_image: string;
  short_screenshots: string[];
  description: string;
};

const API_KEY = import.meta.env.VITE_API_KEY;
const PAGE_NUMBER = Math.ceil(Math.random()* 10);
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
      short_screenshots: game.short_screenshots,
      released: game.released
    };
  });
  return storeFilter;
};

export default getData;

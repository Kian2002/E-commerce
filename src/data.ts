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

type Short_Screenshots = {
  id: number
  image: string
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
  short_screenshots: Short_Screenshots[];
  description: string;
};

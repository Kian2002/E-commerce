import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

type Platform = {
  name: string;
  icon: IconProp;
  size: SizeProp;
};

type Genre = {
  name: string;
  src: string;
  alt: string;
}

export const platforms: Platform[] = [
  {
    name: "PC",
    icon: ["fab", "windows"],
    size: "lg"
  },
  {
    name: "PlayStation 4",
    icon: ["fab", "playstation"],
    size: "lg"
  },
  {
    name: "Xbox One",
    icon: ["fab", "xbox"],
    size: "lg"
  },
  {
    name: "Nintendo Switch",
    icon: ["fas", "gamepad"],
    size: "lg"
  },
];

export const genres: Genre[] = [
  {
    name: "Action",
    src: "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
    alt: "Action Games Image"
  },
  {
    name: "Adventure",
    src: "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    alt: "Adventure Games Image"
  },
  {
    name: "RPG",
    src:"https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
    alt: "Role Playing Games Image"
  },
  {
    name: "Strategy",
    src: "https://media.rawg.io/media/games/6bc/6bc79f5bc023b1e6938f6eaf9926f073.jpg",
    alt: "Strategy Games Image"
  },
  {
    name: "Simulation",
    src: "https://media.rawg.io/media/games/a44/a444a7628bdb49b24d06a7672f805814.jpg",
    alt: "Simulation Games Image"
  },
  {
    name: "Sports",
    src: "https://media.rawg.io/media/games/8c7/8c77cb878b8cafe0b5ee5b21d488393b.jpg",
    alt: "Sports Games Image"
  },
  {
    name: "Racing",
    src: "https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg",
    alt: "Racing Games Image"
  }
];

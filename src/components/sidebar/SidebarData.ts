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
    src: "src/assets/sidebar/action.jpeg",
    alt: "Action Games Image"
  },
  {
    name: "Adventure",
    src: "src/assets/sidebar/adventure.jpeg",
    alt: "Adventure Games Image"
  },
  {
    name: "RPG",
    src:"src/assets/sidebar/rpg.jpeg",
    alt: "Role Playing Games Image"
  },
  {
    name: "Strategy",
    src: "src/assets/sidebar/strategy.jpeg",
    alt: "Strategy Games Image"
  },
  {
    name: "Simulation",
    src: "src/assets/sidebar/simulation.jpeg",
    alt: "Simulation Games Image"
  },
  {
    name: "Sports",
    src: "src/assets/sidebar/sports.jpeg",
    alt: "Sports Games Image"
  },
  {
    name: "Racing",
    src: "src/assets/sidebar/racing.jpeg",
    alt: "Racing Games Image"
  }
];

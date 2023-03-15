import { Windows } from "../../assets/logos/Windows";
import { Playstation } from "../../assets/logos/Playstation";
import { Xbox } from "../../assets/logos/Xbox";
import { Switch } from "../../assets/logos/Switch";

type Platform = {
  name: string;
  svg: () => JSX.Element;
};

type Genre = {
  name: string;
  src: string;
  alt: string;
}

export const platforms: Platform[] = [
  {
    name: "PC",
    svg: Windows
  },
  {
    name: "PlayStation 4",
    svg: Playstation
  },
  {
    name: "Xbox One",
    svg: Xbox
  },
  {
    name: "Nintendo Switch",
    svg: Switch
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

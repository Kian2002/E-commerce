import { Windows } from "../../../public/assets/logos/Windows";
import { Playstation } from "../../../public/assets/logos/Playstation";
import { Xbox } from "../../../public/assets/logos/Xbox";
import { Switch } from "../../../public/assets/logos/Switch";

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
    src: "/assets/sidebar/action.jpeg",
    alt: "Action Games Image"
  },
  {
    name: "Adventure",
    src: "/assets/sidebar/adventure.jpeg",
    alt: "Adventure Games Image"
  },
  {
    name: "RPG",
    src:"/assets/sidebar/rpg.jpeg",
    alt: "Role Playing Games Image"
  },
  {
    name: "Strategy",
    src: "/assets/sidebar/strategy.jpeg",
    alt: "Strategy Games Image"
  },
  {
    name: "Simulation",
    src: "/assets/sidebar/simulation.jpeg",
    alt: "Simulation Games Image"
  },
  {
    name: "Sports",
    src: "/assets/sidebar/sports.jpeg",
    alt: "Sports Games Image"
  },
  {
    name: "Racing",
    src: "/assets/sidebar/racing.jpeg",
    alt: "Racing Games Image"
  }
];

import { Windows, Playstation, Xbox, Nintendo } from "../../assets";

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
    svg: Nintendo
  },
];

export const genres: Genre[] = [
  {
    name: "Action",
    src: "https://res.cloudinary.com/dp8ne3hkc/image/upload/q_10/v1678866250/action_b1wuf0.jpg",
    alt: "Action Games Image"
  },
  {
    name: "Adventure",
    src: "https://res.cloudinary.com/dp8ne3hkc/image/upload/q_10/v1678865971/adventure_zqchnx.jpg",
    alt: "Adventure Games Image"
  },
  {
    name: "RPG",
    src:"https://res.cloudinary.com/dp8ne3hkc/image/upload/q_10/v1678866413/rpg_czg1py.jpg",
    alt: "Role Playing Games Image"
  },
  {
    name: "Strategy",
    src: "https://res.cloudinary.com/dp8ne3hkc/image/upload/q_10/v1678866405/strategy_r68oxn.jpg",
    alt: "Strategy Games Image"
  },
  {
    name: "Simulation",
    src: "https://res.cloudinary.com/dp8ne3hkc/image/upload/q_10/v1678866261/simulation_ljdqcu.jpg",
    alt: "Simulation Games Image"
  },
  {
    name: "Sports",
    src: "https://res.cloudinary.com/dp8ne3hkc/image/upload/q_10/v1678866401/sports_pwidu2.jpg",
    alt: "Sports Games Image"
  },
  {
    name: "Racing",
    src: "https://res.cloudinary.com/dp8ne3hkc/image/upload/q_10/v1678866421/racing_jkzzy9.jpg",
    alt: "Racing Games Image"
  }
];

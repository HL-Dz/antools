import arrow from "../../assets/images/icons/arrow.svg";

export type Item = {
  id: number;
  content: string;
  path: string;
  icon?: React.ReactNode;
};

const links: Item[] = [
  { id: 1, content: "Home", path: "#" },
  { id: 2, content: "Categories", path: "#" },
  {
    id: 3,
    content: "My Collection",
    path: "#",
    icon: arrow,
  },
  { id: 4, content: "Blog", path: "#" },
];

export default links;

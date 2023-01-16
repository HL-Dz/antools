export type MenuItem = {
  id: number;
  content: string;
  path: string;
  icon?: boolean;
  subMenu?: SubItem[];
};

type SubItem = {
  id: number;
  body: string;
  path: string;
};

const links: MenuItem[] = [
  { id: 1, content: "Home", path: "#" },
  {
    id: 2,
    content: "Categories",
    path: "#",
    subMenu: [
      { id: 1, body: "Action", path: "#" },
      { id: 2, body: "Adventure", path: "#" },
      { id: 3, body: "Comedy", path: "#" },
      { id: 4, body: "Fantasy", path: "#" },
      { id: 5, body: "Sports", path: "#" },
      { id: 6, body: "Thriller", path: "#" },
    ],
  },
  {
    id: 3,
    content: "My Collection",
    path: "#",
    subMenu: [
      { id: 1, body: "Animals", path: "#" },
      { id: 2, body: "Landscapes", path: "#" },
      { id: 3, body: "Portraits", path: "#" },
      { id: 4, body: "Sunsets", path: "#" },
    ],
  },
  { id: 4, content: "Blog", path: "#" },
];

export default links;

export interface NavLink {
  id: number;
  title: string;
  link: string;
}

export const navLinks: NavLink[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Events",
    link: "/events",
  },
  {
    id: 3,
    title: "Prices",
    link: "/prices",
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
  },
];

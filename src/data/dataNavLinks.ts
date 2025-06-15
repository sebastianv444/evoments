export interface NavLink {
  id: number;
  title: string;
  link: string;
}

export const navLinks: NavLink[] = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    title: "Eventos",
    link: "/events",
  },
  {
    id: 3,
    title: "Contacto",
    link: "/contact",
  },
];

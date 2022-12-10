type Page = {
  name: string;
  href: string;
}

const PAGES: Page[] = [
  {
    name: "Inicio",
    href: "/"
  },
  {
    name: "Servicios",
    href: "/servicios"
  },
  {
    name: "Experiencia",
    href: "/experiencia"
  },
  {
    name: "Portafolio",
    href: "/portafolio"
  },
  {
    name: "Contacto",
    href: "/contacto"
  }
];

export default PAGES;
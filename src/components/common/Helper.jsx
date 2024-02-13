import {
  BottomArrow,
  FaceBook,
  GreenBulb,
  GreenValue,
  Instagram,
  LightGreenBulb,
  LightGreenFeature,
  LightGreenMan,
  LinkedIn,
  Mail,
  StartMan,
  Telephone,
  TopArrow,
} from "./Icons";

// navbar links
export const navBarLink = [
  { title: "Hogar", path: "#home" },
  { title: "Misión", path: "#faq" },
  { title: "Tragamonedas", path: "#slots" },
  { title: "Por qué elegirnos", path: "#kasinoNight" },
  { title: "Ofertas", path: "#jackpot" },
];
// footer icon
export const footerLinks = [
  {
    title: "Menú principal",
    link: [
      { subTitle: "Hogar", path: "#home" },
      { subTitle: "Misión", path: "#faq" },
      { subTitle: "Tragamonedas", path: "#slots" },
      { subTitle: "Por qué elegirnos", path: "#kasinoNight" },
      { subTitle: "Ofertas", path: "#jackpot" },
    ],
  },
  {
    title: "Atención al cliente",
    link: [
      { subTitle: "¿Necesitas ayuda?", path: "#home" },
      { subTitle: "política de privacidad", path: "#slots" },
      { subTitle: "Términos de servicios", path: "#kasinoNight" },
    ],
  },
  {
    title: "Ponerse en contacto",
    link: [
      {
        subTitle: "juegosexclusivos@gmail.com",
        path: "mailto:juegosexclusivos@gmail.com",
        icon: <Mail />,
      },
      {
        subTitle: "(101)342-7873",
        path: "tel:100",
        icon: <Telephone />,
      },
    ],
  },
];
// slots card
export const slots = [
  { image: "/assets/images/slots/jet_x.webp" },
  { image: "/assets/images/slots/joker.webp" },
  { image: "/assets/images/slots/dummy.webp" },
  { image: "/assets/images/slots/lucky.webp" },
  { image: "/assets/images/slots/hello.webp" },
  { image: "/assets/images/slots/r_p_g.webp" },
];
// jackpot services
export const jackpotServices = [
  { title: "Tecnología HTML5" },
  { title: "Versión PC y móvil" },
  { title: "Control de RTP (controlás qué porcentaje pagar)" },
  { title: "Bonos editables, happy hours, Jackpots, códigos  promocionales." },
  { title: "Aplicación para android y windows de regalo." },
];
// ezuko card
export const ezukoCard = [
  { image: "/assets/images/ezuko/ezuko.webp" },
  { image: "/assets/images/ezuko/roullet.webp" },
  { image: "/assets/images/ezuko/live_betting.webp" },
];
// ellos card
export const ellosCard = [
  { image: "/assets/images/ellos/giros.webp" },
  { image: "/assets/images/ellos/ultra.webp" },
  { image: "/assets/images/ellos/hour.webp" },
];
// mas card data
export const masCards = [
  {
    icon: <GreenBulb />,
    title: "200",
    description: "Páginas creadas",
  },
  {
    icon: <StartMan />,
    title: "98%",
    description: "Clientes Satisfechas",
  },
  {
    icon: <GreenValue />,
    title: "200",
    description: "Divisas Disponibles",
  },
];
// accordion data
export const accordionContent = [
  {
    title:
      "¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    title: "¿Cómo garantizan la seguridad de las operaciones en sus juegos?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    title:
      " ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    title: "¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    title: "¿Qué métodos de pago aceptan?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    title: "¿Puedo probar sus juegos antes de comprometerme?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
];
// footer icon
export const footerIcon = [
  { link: "https://www.instagram.com/", icon: <Instagram /> },
  { link: "https://www.facebook.com/login/", icon: <FaceBook /> },
  { link: "https://www.linkedin.com/", icon: <LinkedIn /> },
];

// nutro Atributo
export const nutroAtributo = [
  {
    title:
      "Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales",
  },
  { title: "Control de RTP (controlás qué porcentaje pagar)" },
  {
    title:
      "Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo",
  },
  { title: "Aplicación para Android y Windows de regalo." },
  { title: "Tiempo de creación 2 a 3 semanas" },
];
// marca card
export const marcaCard = [
  {
    icon: <LightGreenBulb />,
    arrow: <TopArrow />,
    title: "Inteligencia",
    description:
      "Comprendemos a la perfección los gustos de las personas y elmundo del gaming.",
  },
  {
    icon: <LightGreenMan />,
    arrow: <BottomArrow />,
    title: "Proactividad",
    description:
      "Somos creadores de cambios que exploran nuevas formas de entretenimiento.",
  },
  {
    icon: <LightGreenFeature />,
    title: "Innovación",
    description:
      "Pensamos fuera de la caja para estar siempre un paso adelante.",
  },
];

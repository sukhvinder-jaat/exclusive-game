import {
  BottomArrow,
  FaceBook,
  GreenBulb,
  GreenValue,
  Instagram,
  LightGreenBuld,
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
  { tittle: "Hogar", path: "#home" },
  { tittle: "Misión", path: "#faq" },
  { tittle: "Tragamonedas", path: "#slots" },
  { tittle: "Por qué elegirnos", path: "#kasinoNight" },
  { tittle: "Ofertas", path: "#jackpot" },
];
// footer icon
export const footerLinks = [
  {
    tittle: "Menú principal",
    link: [
      { subTittle: "Hogar", path: "#home" },
      { subTittle: "Misión", path: "#faq" },
      { subTittle: "Tragamonedas", path: "#slots" },
      { subTittle: "Por qué elegirnos", path: "#kasinoNight" },
      { subTittle: "Ofertas", path: "#jackpot" },
    ],
  },
  {
    tittle: "Atención al cliente",
    link: [
      { subTittle: "¿Necesitas ayuda?", path: "#home" },
      { subTittle: "política de privacidad", path: "#slots" },
      { subTittle: "Términos de servicios", path: "#kasinoNight" },
    ],
  },
  {
    tittle: "Ponerse en contacto",
    link: [
      {
        subTittle: "juegosexclusivos@gmail.com",
        path: "mailto:juegosexclusivos@gmail.com",
        icon: <Mail />,
      },
      {
        subTittle: "(101)342-7873",
        path: "tel:100",
        icon: <Telephone />,
      },
    ],
  },
];
// slots card
export const slots = [
  { image: "/assets/images/slots/card_image_1.webp" },
  { image: "/assets/images/slots/card_image_2.webp" },
  { image: "/assets/images/slots/card_image_3.webp" },
  { image: "/assets/images/slots/card_image_4.webp" },
  { image: "/assets/images/slots/card_image_5.webp" },
  { image: "/assets/images/slots/card_image_6.webp" },
];
// jackpot services
export const jackpotServices = [
  { tittle: "Tecnología HTML5" },
  { tittle: "Versión PC y móvil" },
  { tittle: "Control de RTP (controlás qué porcentaje pagar)" },
  { tittle: "Bonos editables, happy hours, Jackpots, códigos  promocionales." },
  { tittle: "Aplicación para android y windows de regalo." },
];
// ezuko card
export const ezukoCard = [
  { image: "/assets/images/ezuko/card_image_1.webp" },
  { image: "/assets/images/ezuko/card_image_2.webp" },
  { image: "/assets/images/ezuko/card_image_3.webp" },
];
// ellos card
export const ellosCard = [
  { image: "/assets/images/ellos/card_image_1.png" },
  { image: "/assets/images/ellos/card_image_2.png" },
  { image: "/assets/images/ellos/card_image_3.png" },
];
// mas card data
export const masCards = [
  {
    icon: <GreenBulb />,
    tittle: "200",
    description: "Páginas creadas",
  },
  {
    icon: <StartMan />,
    tittle: "98%",
    description: "Clientes Satisfechas",
  },
  {
    icon: <GreenValue />,
    tittle: "200",
    description: "Divisas Disponibles",
  },
];
// accordian data
export const accordianData = [
  {
    tittle:
      "¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    tittle: "¿Cómo garantizan la seguridad de las operaciones en sus juegos?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    tittle:
      " ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    tittle: "¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    tittle: "¿Qué métodos de pago aceptan?",
    description:
      "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
  },
  {
    tittle: "¿Puedo probar sus juegos antes de comprometerme?",
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
    tittle:
      "Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales",
  },
  { tittle: "Control de RTP (controlás qué porcentaje pagar)" },
  {
    tittle:
      "Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo",
  },
  { tittle: "Aplicación para Android y Windows de regalo." },
  { tittle: "Tiempo de creación 2 a 3 semanas" },
];
// marca card
export const marcaCard = [
  {
    icon: <LightGreenBuld />,
    arrow: <TopArrow />,
    tittle: "Inteligencia",
    description:
      "Comprendemos a la perfección los gustos de las personas y elmundo del gaming.",
  },
  {
    icon: <LightGreenMan />,
    arrow: <BottomArrow />,
    tittle: "Proactividad",
    description:
      "Somos creadores de cambios que exploran nuevas formas de entretenimiento.",
  },
  {
    icon: <LightGreenFeature />,
    tittle: "Innovación",
    description: "Pensamos fuera de la caja para estar siempre un paso adelante.",
  },
];

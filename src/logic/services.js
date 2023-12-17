import {
  Css,
  html,
  Javscript,
  Tailwind,
  Typescripts,
  Reacts,
  Node,
  Express,
  Postgres,
  Sequelize,
  Mysql,
  Mongo,
  Prisma
} from "../utils";




export const services = {
  front: [
    {
      icono: html,
      title: "Html5",
    },
    {
      icono: Css,
      title: "Css3",
    },
    {
      icono: Reacts,
      title: "React",
    },
    {
      icono: Tailwind,
      title: "Tailwind",
    },
    {
      icono: Javscript,
      title: "Javscript",
    },
    {
      icono: Typescripts,
      title: "Typescript",
    },
  ],
  back: [
    {
      icono: Node,
      title: "NodeJs",
    },
    {
      icono: Express,
      title: "Express",
    },
   
    {
      icono: Sequelize,
      title: "Sequelize",
    },
    {
      icono: Prisma,
      title: "Prisma",
    },
  ],
  bdd: [
    {
      icono: Postgres,
      title: "Postgresql",
    },
    {
      icono: Mysql,
      title: "MySQL",
    },
    {
      icono: Mongo,
      title: "MongoDB",
    },
  ],
};

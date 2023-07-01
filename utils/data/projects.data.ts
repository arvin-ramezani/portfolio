import { IProject } from '../types/project.types';

export const PROJECT_LIST: IProject[] = [
  {
    name: 'Realtor App',
    video: '/videos/nestjs-realtor-demo.mp4',
    cover: '/images/projects-cover/realtor-app.svg',
    translatorName: 'realtor_app',
    github: 'https://github.com/arvin-ramezani/nest.js-realtor-app',
    tools: ['Swagger', 'NestJs', 'Prisma', 'PostgreSQL'],
  },
  {
    name: 'Pizza Shop',
    video: '/videos/pizza-shop.mp4',
    cover: '/images/projects-cover/pizza-shop.svg',
    translatorName: 'pizza_shop',
    github: 'https://github.com/arvin-ramezani/pizza-shop',
    tools: [
      'NextJS',
      'TypeScript',
      'Mongoose',
      'redux-toolkit',
      'framer-motion',
      'styled-compnents',
      'react-hook-form',
    ],
  },
  {
    name: 'MERN Simple Watch Shop',
    video: '/videos/watch-shop.mp4',
    cover: '/images/projects-cover/simple-watch-shop.svg',
    translatorName: 'watch_shop',
    github: 'https://github.com/arvin-ramezani/MERN-simple-watch-shop',
    tools: [
      'TypeScript',
      'Mongoose',
      'redux-toolkit',
      'Material UI',
      'react-hook-form',
      'axios',
    ],
  },
  {
    name: 'MERN Animals House',
    video: '/videos/animals-house.mp4',
    cover: '/images/projects-cover/animals-house.svg',
    translatorName: 'animals_house',
    github: 'https://github.com/arvin-ramezani/MERN-animals-house',
    tools: [
      'TypeScript',
      'Mongoose',
      'redux-toolkit',
      'styled-components',
      'framer-motion',
      'react-hook-form',
      'axios',
    ],
  },
];

const pizzaDescription = `
This is a practice project which I create after watching <a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/" target="_bland">NextJS Academind Course</a> to practice what I learned in the course. 
(File Upload, Authentication and Authorization, Form validation using react-hook-form and yup).
<br />
I used next-auth for authentication.
<br />
I learned a lot about animations with framer-motion and how it works together with styled-components to create reusable components.
<br />
I was already familiar with redux-toolkit but had not used RTK Query before. I practiced using it in NextJS in this project, also I practiced how to work with Map API (Mapbox).
`;

const realtorAppDescription: string = `This is a practice project from 
<a
  href="https://www.udemy.com/course/the-nest-js-bootcamp-complete-developer-guide/"
  target="_blank"
>
  <strong>The Nest JS Bootcamp - Complete Developer Guide</strong> 
  Course. This is a simple API side of Realtor app like 
</a>
<a
  href="https://www.realtor.com"
  target="_blank"
>
  Realtor.com
</a>
, where users can signup as realtor to show and sell their homes, and
other users as buyers can signup for message to realtors to buy the
specific house.
<br />
This was very simple app but teaches a lot about different parts of
NestJS framework like: ORM Integration, Middleware, Interceptors,
Guards, Decorators, Param Decorators, Integration Testing and so on.
<br />I also learned Swagger for API documentation and apply to this
project.`;

const watchShopDescription: string = `This is a practice MERN project in which I focused on implementing authentication and authorization with accessToken and refreshToken. 
  To enhance the user interface, I used react-hook-form with yup for form validation. I utilized material-ui for UI library, 
  I practiced implementing a shopping cart with redux-toolkit, By working on this project 
  I gained hands-on experience in developing a web application with user authentication and authorization features.`;

const animalsHouseDescription: string = `I worked on a MERN project that focused on authentication and authorization using accessToken and refreshToken, 
which accessToken will expire after 180 seconds. 
I also utilized react-hook-form with yup for client-side form validation. 
To improve the user experience, I implemented a loading skeleton and utilized styled-components for the UI library. 
For animations, I used framer-motion to create smooth and seamless transitions between components. 
To fetch data, I practiced using redux-thunk in redux-toolkit, and I also learned how to fetch data using searchQueryParams.`;

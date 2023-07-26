import { ICourse, ICourseWithTranslate } from '../types/course.types';

export const COURSES_LIST: ICourse[] = [
  {
    name: 'ChatGPT - The Complete Guide',
    image: '/images/courses/chatgpt-course.jpg',
    learnedList: [
      'How Was ChatGPT Created, And How Does It Work?',
      'What is features and limitations are ?',
      'Understanding Tokens',
      'ChatGPT Hallucinations',
      'Prompt Engineering',
      'Using ChatGPT for utility tasks and content creation',
      'Handson ChatGPT Midjourney for Content Creation',
      'Using ChatGPT for Programming Web Development',
      'How To Use GPT APIs ?',
      'AutoGPT LangChain Building Automated AI Tools',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/chatgpt-the-complete-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/chatgpt-bard-bing-complete-guide-to-chatgpt-openai-apis/',
      },
    ],
  },
  {
    name: 'Next.js & React - The Complete Guide',
    image: '/images/courses/nextjs-course.jpg',
    learnedList: [
      'Authentication and Authorization with next-auth',
      'SSG - SSR - ISR - CSR',
      'File Upload and Download',
      'Optimizing Nexjs Apps',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/nextjs-react-the-complete-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/nextjs-react-the-complete-guide/',
      },
    ],
  },
  {
    name: 'Cypress End-to-End Testing - Getting Started',
    image: '/images/courses/cypress-course.jpg',
    learnedList: [
      'Fundamentals and Basics',
      'Deep Dive: A Closer Look at Element Selection, Actions and Assertions',
      'Test Organization and Configuration: Custom Commands and Queries',
      'Working with Stubs, Spies, Fixtures & Manipulating the Clock',
      'HTTP Requests, Databases & Authentication',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/cypress-end-to-end-testing-getting-started',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/cypress-end-to-end-testing-getting-started/',
      },
    ],
  },
  {
    name: 'JavaScript Unit Testing - The Practical Guide',
    image: '/images/courses/unit-testing-course.jpg',
    learnedList: [
      'Adjusting The Development Environment (Test Runner & Assertion Library)',
      'Unit Testing Functionals',
      'AAA Pattern - Arrange, Act, Assert',
      'What to test ?',
      'How to Write Good Tests ?',
      'Integration Testing',
      'Balancing Unit and Integration Tests',
      'Advanced Testing Concepts',
      'Mocking & Spies Dealing with Side Effects',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/javascript-unit-testing-the-practical-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/',
      },
    ],
  },
  {
    name: 'React Native - The Practical Guide',
    image: '/images/courses/react-native-course.jpg',
    learnedList: [
      'Debugging React Native Apps',
      'Diving Deeper into Components, Layouts & Styling - Building a Mini-Game App',
      'Building Adaptive User Interfaces (Adapt to Platform & Device Sizes)',
      'React Navigation',
      'Redux and Context API',
      'Handling User Inputs',
      'User Authentication',
      'Using Native Devices Features',
      'Push Notifications',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/react-native-the-practical-guide-2022-new',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/react-native-the-practical-guide/',
      },
    ],
  },
  {
    name: 'SQL - The Complete Guide (MySQL, PostgreSQL & more)',
    image: '/images/courses/sql-course.jpg',
    learnedList: [
      'Core SQL Syntax & Rules',
      'Managing Tables & Working With Data Types',
      'CRUD Operations With SQL',
      'Data Normalization & Relationships (Splitting & JOINing Data)',
      'Composite Primary Keys & Composite Foreign Keys',
      'Self-Referential Relationships',
      'Grouping & Aggregate Functions',
      'Database Transactions',
      'Using Indexes',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/sql-the-complete-guide-mysql-postgresql-more',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/sql-the-complete-developers-guide-mysql-postgresql/',
      },
    ],
  },
  {
    name: 'Clean Code',
    image: '/images/courses/clean-code-course.jpg',
    learnedList: [
      'Assigning Good Names for Variables, Functions, Classes',
      'Code Structure, Comments & Formatting',
      'How to Write Clean Function (Parameters - Function lengths and Abstraction Levels & Splitting Functions',
      'How to Avoid Deeply Nested Control Structures - How to Utilize Errors Instead of Error Statements',
      'Keep Your Classes and Objects Clean and Work With them in Clean Way - Difference Between Classes, Objects and Data Structures or Data Containers',
      'Object-oriented Principles (SOLID, Low of Demeter',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/clean-code',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/writing-clean-code/',
      },
    ],
  },
  {
    name: 'Git & GitHub - The Practical Guide',
    image: '/images/courses/git-github-course.jpg',
    learnedList: [
      'How does Git work with GitHub - Repositories, Branches and Commits',
      'Manages and Combining Git Branches - Understanding Stash - Resolving Conflicts',
      'Remote Branches, Remote Tracking Branches and Local Tracking Branches - Understanding Upstreams',
      'Collaboration and Contributions - Understanding GitHub Accounts Types and Repository Types',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/git-github-the-practical-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/git-github-practical-guide/',
      },
    ],
  },
  {
    name: 'Docker & Kubernetes: The Practical Guide',
    image: '/images/courses/docker-kubernetes-course.jpg',
    learnedList: [
      'Docker Images and Containers',
      'Understanding Different Kinds of Data - Volumes and Bind Mounts',
      'Networking in Docker',
      'Building Multi Container Applications With Docker and Docker Compose',
      'Working with Utility Containers and Executing Commands In Containers',
      'Deploying Docker Containers',
      'Kubernetes and Docker (Container Orchestration Independent of Cloud Providers We Using)',
      'Kubernetes Architecture & Core Concepts - (Cluster, Pod, WorkerNodes, MasterNode, The Control Plane and Deployments)',
      'Managing Data and Volumes With Kubernetes - Kubernetes Networking',
      'Kubernetes Deployments',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/docker-kubernetes-the-practical-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/docker-kubernetes-the-practical-guide/',
      },
    ],
  },
  {
    name: `MongoDB - The Complete Developer's Guide 2022`,
    image: '/images/courses/mongodb-course.jpg',
    learnedList: [
      'Understanding the Basics (CRUD Operations)',
      'Schemas Relations and How to Structure Documents',
      'Diving Deeper to Create, Read, Update and Delete Operations',
      'How to Work with Indexes',
      'Working with Geospatial Data',
      'Understanding the Aggregation Framework',
      'Working with Numeric Data int32, int64, Doubles(64bit), High Precision Doubles(128bit)',
      'Security in MongoDB (Authentication & Authorization, Transport Encryption and Encryption at Rest)',
      'Performance, Fault Tolerancy & Deployment (Influences Performance, Capped Collections, Replica Sets, Sharding and MongoDB Server Development)',
      'Transactions',
      'How to Work with Drivers and Connect MongoDB to Application',
      'What is MongoDB Stitch and How to Use it',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/mongodb-the-complete-developer-s-guide-2020',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/nodejs-the-complete-guide/',
      },
    ],
  },
  {
    name: `React, NodeJS, Express & MongoDB - The MERN Fullstack Guide`,
    image: '/images/courses/mern-course.jpg',
    learnedList: [
      'MERN Theory (How do React, NodeJS, Express & MongoDB Work Together - Different Approaches of Combining These Pieces',
      'Planning a MERN Project (What to Do When)',
      'File Upload',
      'Authentication and Authorization',
      'Application Development',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/react-nodejs-express-mongodb-the-mern-fullstack-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/',
      },
    ],
  },
  {
    name: `JavaScript Data Structures - The Fundamentals`,
    image: '/images/courses/data-structures-course.jpg',
    learnedList: [
      'What are Data Structures? - (Arrays vs Sets - Objects vs Maps - Weak Set & Weak Map - Work with Linked Lists)',
      'Work With Lists and Tables - Stack Data Structures - Queues - Hash Tables - Understanding Hash Collisions and Solving with Chaining & Open Addressing',
      'What Are Trees and Core Terminology - Work with Different Trees (Depth First & Breadth First Search, Work With Binary Search Trees, Working With AVL Trees, Working With Tries',
      'Work With Priority Queues and Heaps',
      'Work With Graphs',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/javascript-datastructures-the-fundamentals',
      },
    ],
  },
  {
    name: `JavaScript Algorithms - The Fundamentals`,
    image: '/images/courses/algorithms-course.jpg',
    learnedList: [
      'Math Algorithms - Big O Notation and The Right Way of Thinking About Problems',
      'Recursion in Algorithms and Dynamic Programming',
      'Search Algorithms - (Linear and Binary) - The Master Theorem',
      'Sorting Algorithms',
      'Space Complexity',
      'Sets (Array) Algorithms',
      'More Complex Algorithms & How To Solve Code Problems',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/javascript-algorithms-the-fundamentals',
      },
    ],
  },
  {
    name: `Progressive Web Apps (PWA) - The Complete Guide`,
    image: '/images/courses/typescript-course.jpg',
    learnedList: [
      'Understanding The App Manifest and The Service Workers',
      'Implementing Caching With Service Workers - (Static Caching, Dynamic Caching and Cache Versioning)',
      'Advanced Caching and Different Caching Strategies (Post Request and Cache API, Cache with Network Fallback, Network with Cache Fallback, Cache then Network, Cache then Network Dynamic Caching, Cache then Network with Offline Support, Cache Strategies Routing and more...)',
      'Using IndexedDB for Caching Dynamic Data',
      'Background Synchronization',
      'Web Push Notifications',
      'Accessing The Native Device Features',
      'Service Worker Management with Workbox',
      'How to Turn React, Vue or Angular App to Progressive Web Apps',
    ],
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/progressive-web-apps-pwa-the-complete-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/progressive-web-app-pwa-the-complete-guide/',
      },
    ],
  },
  {
    name: `Microservices with Node JS and React`,
    image: '/images/courses/microservices-course.jpg',
    learnedList: [
      'Fundamentals Around Microservices - Big Problems With Data In Microservices - Communication Strategies Between Services (Sync and Async)',
      'Running Services With Docker and Orchestrating Collections of Services with Kubernetes (Skaffold)',
      'Build a Central Library as an NPM module to Share Code Between Services - Handle Concurrency Issues',
      'Error Handling in Express.js App - Database Management and Modeling (Create Database With Kubernetes)',
      'Fundamental Authentication Strategies - Individual Services Rely On Auth the Service(sync) or They Know How to Authenticate a User(async)',
      'Testing Isolated Microservices (Different Scopes of Testing)',
      'Integrating Next.js Framework to Our Microservice Application',
      'Event Bus Implementation Using NATS Streaming Server (Connecting to NATS in a Node JS World and Managing a NATS Client)',
      'Understanding Event Flow and Handling Concurrency Issues',
      'Worker Services - Implement an Expiration Service',
      'CI / CD (GitHub)',
    ],
    links: [
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/microservices-with-node-js-and-react/',
      },
    ],
  },
  {
    name: `NestJS: The Complete Developer's Guide`,
    image: '/images/courses/stephen-grider-nestjs-course.jpg',
    learnedList: [
      'Basics of Nest.js',
      'Validating Request Data With Pipes',
      'Nest.js Architecture - How Do Services and Repositories Work Together',
      'Understanding Modules and Dependency Injection',
      'Persistent Data With Nest.js - (Mongoose, TypeORM and etc)',
      'Big Project - (Creating a Small API and Continue to Explore Some of The Features Around Nest.js)',
      'Custom Data Serialization',
      'Authentication and Authorization (Explore Different Options)',
      'Unit Testing and Integration Testing in Nest.js',
      'Relations With TypeORM',
      'How do the Middleware, Guard, Decorators, and Interceptors Work Together, and In Which Order Do They Run On A Request?',
      'Query Builders With TypeORM',
    ],
    links: [
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/nestjs-the-complete-developers-guide/',
      },
    ],
  },
  {
    name: `The Nest JS Bootcamp - Complete Developer Guide`,
    image: '/images/courses/laith-harb-nestjs-course.jpg',
    learnedList: [
      'Controllersو Decorator Params and Services In Nest.js',
      'Adding Validations With Pipes and DTOs (Enum Validation Pipe, Validation The Body With DTOs and Whitelisting Undesired Properties)',
      'Transforming the Response With Interceptors',
      'Big Project - (ORM Integration, Authentication and Authorization, Middleware, Guards and Interceptors)',
      'Automated Tests In Nest.js',
    ],
    links: [
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/the-nest-js-bootcamp-complete-developer-guide/',
      },
    ],
  },
  {
    name: `Modern GraphQL with Node - Complete Developers Guide`,
    image: '/images/courses/laith-harb-graphql-node-course.jpg',
    learnedList: [
      'What Is GraphQL? and What Problems It Solves? (Prevents Over-Fetching and Under-Fetching - How Data Is Organized)',
      'Queries and Schemas (Scalar, Array and Object Types - Relating Data - File Structure)',
      'What Are Mutations? (Creating, Deleting and Updating Data)',
      'Best Practices And Rules of Designing a GraphQL API (Focusing In On Designing Rules and Principles That We Should Apply and Think About When Creating A GraphQL API - Referring a Tutorial From Shopify)',
      'Project With GraphQL, Node And TypeScript - Database Storage With Prisma V3',
      'Authentication And Authorization In GraphQL',
      'The N + 1 Problem In GraphQL (Caching and Baching Using DataLoader, Pagination)',
      'Connect API To React.js Using Apollo Client (Querying, Mutations and Passing The Auth Token From The Frontend',
    ],
    links: [
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/modern-graphql-complete-guide/',
      },
    ],
  },
  {
    name: `JavaScript`,
    image: '/images/courses/javascript-course.jpg',
    learnedList: [
      'JavaScript - ES6, ES7 and ES8',
      'Project-Based JavaScript Course (Video Player, Playing Piano, Drag and Drop, Slider, Snake Game, Images Zoom, Scroll Top, Preload and more)',
    ],
    links: [
      {
        name: 'https://roocket.ir/',
        logo: '/images/logo-roocket.svg',
        url: 'https://roocket.ir/skills/javascript',
      },
    ],
  },
  {
    name: `HTML and CSS`,
    image: '/images/courses/roocket-html-css-course.jpg',
    learnedList: ['HTML, CSS (Flexbox, CSS Grid)'],
    links: [
      {
        name: 'https://roocket.ir/',
        logo: '/images/logo-roocket.svg',
        url: 'https://roocket.ir/skills/frontend',
      },
    ],
  },
];

export const COURSES_LIST_WITH_TRANSLATE: ICourseWithTranslate[] = [
  {
    name: 'ChatGPT - The Complete Guide',
    image: '/images/courses/chatgpt-course.jpg',
    learnedList: [
      'How Was ChatGPT Created, And How Does It Work?',
      'What is features and limitations are ?',
      'Understanding Tokens',
      'ChatGPT Hallucinations',
      'Prompt Engineering',
      'Using ChatGPT for utility tasks and content creation',
      'Handson ChatGPT Midjourney for Content Creation',
      'Using ChatGPT for Programming Web Development',
      'How To Use GPT APIs ?',
      'AutoGPT LangChain Building Automated AI Tools',
    ],
    learned: {
      translatorName: 'chatgpt',
      itemLength: 10,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/chatgpt-the-complete-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/chatgpt-bard-bing-complete-guide-to-chatgpt-openai-apis/',
      },
    ],
  },
  {
    name: 'Next.js & React - The Complete Guide',
    image: '/images/courses/nextjs-course.jpg',
    learnedList: [
      'Authentication and Authorization with next-auth',
      'SSG - SSR - ISR - CSR',
      'File Upload and Download',
      'Optimizing Nexjs Apps',
    ],
    learned: {
      translatorName: 'nextjs',
      itemLength: 4,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/nextjs-react-the-complete-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/nextjs-react-the-complete-guide/',
      },
    ],
  },
  {
    name: 'Cypress End-to-End Testing - Getting Started',
    image: '/images/courses/cypress-course.jpg',
    learnedList: [
      'Fundamentals and Basics',
      'Deep Dive: A Closer Look at Element Selection, Actions and Assertions',
      'Test Organization and Configuration: Custom Commands and Queries',
      'Working with Stubs, Spies, Fixtures & Manipulating the Clock',
      'HTTP Requests, Databases & Authentication',
    ],
    learned: {
      translatorName: 'cypress',
      itemLength: 5,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/cypress-end-to-end-testing-getting-started',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/cypress-end-to-end-testing-getting-started/',
      },
    ],
  },
  {
    name: 'JavaScript Unit Testing - The Practical Guide',
    image: '/images/courses/unit-testing-course.jpg',
    learnedList: [
      'Adjusting The Development Environment (Test Runner & Assertion Library)',
      'Unit Testing Functionals',
      'AAA Pattern - Arrange, Act, Assert',
      'What to test ?',
      'How to Write Good Tests ?',
      'Integration Testing',
      'Balancing Unit and Integration Tests',
      'Advanced Testing Concepts',
      'Mocking & Spies Dealing with Side Effects',
    ],
    learned: {
      translatorName: 'js_unit_testing',
      itemLength: 9,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/javascript-unit-testing-the-practical-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/',
      },
    ],
  },
  {
    name: 'React Native - The Practical Guide',
    image: '/images/courses/react-native-course.jpg',
    learnedList: [
      'Debugging React Native Apps',
      'Diving Deeper into Components, Layouts & Styling - Building a Mini-Game App',
      'Building Adaptive User Interfaces (Adapt to Platform & Device Sizes)',
      'React Navigation',
      'Redux and Context API',
      'Handling User Inputs',
      'User Authentication',
      'Using Native Devices Features',
      'Push Notifications',
    ],
    learned: {
      translatorName: 'react_native',
      itemLength: 9,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/react-native-the-practical-guide-2022-new',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/react-native-the-practical-guide/',
      },
    ],
  },
  {
    name: 'SQL - The Complete Guide (MySQL, PostgreSQL & more)',
    image: '/images/courses/sql-course.jpg',
    learnedList: [
      'Core SQL Syntax & Rules',
      'Managing Tables & Working With Data Types',
      'CRUD Operations With SQL',
      'Data Normalization & Relationships (Splitting & JOINing Data)',
      'Composite Primary Keys & Composite Foreign Keys',
      'Self-Referential Relationships',
      'Grouping & Aggregate Functions',
      'Database Transactions',
      'Using Indexes',
    ],
    learned: {
      translatorName: 'sql',
      itemLength: 9,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/sql-the-complete-guide-mysql-postgresql-more',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/sql-the-complete-developers-guide-mysql-postgresql/',
      },
    ],
  },
  {
    name: 'Clean Code',
    image: '/images/courses/clean-code-course.jpg',
    learnedList: [
      'Assigning Good Names for Variables, Functions, Classes',
      'Code Structure, Comments & Formatting',
      'How to Write Clean Function (Parameters - Function lengths and Abstraction Levels & Splitting Functions',
      'How to Avoid Deeply Nested Control Structures - How to Utilize Errors Instead of Error Statements',
      'Keep Your Classes and Objects Clean and Work With them in Clean Way - Difference Between Classes, Objects and Data Structures or Data Containers',
      'Object-oriented Principles (SOLID, Low of Demeter',
    ],
    learned: {
      translatorName: 'clean_code',
      itemLength: 6,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/clean-code',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/writing-clean-code/',
      },
    ],
  },
  {
    name: 'Git & GitHub - The Practical Guide',
    image: '/images/courses/git-github-course.jpg',
    learnedList: [
      'How does Git work with GitHub - Repositories, Branches and Commits',
      'Manages and Combining Git Branches - Understanding Stash - Resolving Conflicts',
      'Remote Branches, Remote Tracking Branches and Local Tracking Branches - Understanding Upstreams',
      'Collaboration and Contributions - Understanding GitHub Accounts Types and Repository Types',
    ],
    learned: {
      translatorName: 'git',
      itemLength: 4,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/git-github-the-practical-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/git-github-practical-guide/',
      },
    ],
  },
  {
    name: 'Docker & Kubernetes: The Practical Guide',
    image: '/images/courses/docker-kubernetes-course.jpg',
    learnedList: [
      'Docker Images and Containers',
      'Understanding Different Kinds of Data - Volumes and Bind Mounts',
      'Networking in Docker',
      'Building Multi Container Applications With Docker and Docker Compose',
      'Working with Utility Containers and Executing Commands In Containers',
      'Deploying Docker Containers',
      'Kubernetes and Docker (Container Orchestration Independent of Cloud Providers We Using)',
      'Kubernetes Architecture & Core Concepts - (Cluster, Pod, WorkerNodes, MasterNode, The Control Plane and Deployments)',
      'Managing Data and Volumes With Kubernetes - Kubernetes Networking',
      'Kubernetes Deployments',
    ],
    learned: {
      translatorName: 'docker',
      itemLength: 10,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/docker-kubernetes-the-practical-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/docker-kubernetes-the-practical-guide/',
      },
    ],
  },
  {
    name: `MongoDB - The Complete Developer's Guide 2022`,
    image: '/images/courses/mongodb-course.jpg',
    learnedList: [
      'Understanding the Basics (CRUD Operations)',
      'Schemas Relations and How to Structure Documents',
      'Diving Deeper to Create, Read, Update and Delete Operations',
      'How to Work with Indexes',
      'Working with Geospatial Data',
      'Understanding the Aggregation Framework',
      'Working with Numeric Data int32, int64, Doubles(64bit), High Precision Doubles(128bit)',
      'Security in MongoDB (Authentication & Authorization, Transport Encryption and Encryption at Rest)',
      'Performance, Fault Tolerancy & Deployment (Influences Performance, Capped Collections, Replica Sets, Sharding and MongoDB Server Development)',
      'Transactions',
      'How to Work with Drivers and Connect MongoDB to Application',
      'What is MongoDB Stitch and How to Use it',
    ],
    learned: {
      translatorName: 'mongodb',
      itemLength: 12,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/mongodb-the-complete-developer-s-guide-2020',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/nodejs-the-complete-guide/',
      },
    ],
  },
  {
    name: `React, NodeJS, Express & MongoDB - The MERN Fullstack Guide`,
    image: '/images/courses/mern-course.jpg',
    learnedList: [
      'MERN Theory (How do React, NodeJS, Express & MongoDB Work Together - Different Approaches of Combining These Pieces',
      'Planning a MERN Project (What to Do When)',
      'File Upload',
      'Authentication and Authorization',
      'Application Development',
    ],
    learned: {
      translatorName: 'mern',
      itemLength: 5,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/react-nodejs-express-mongodb-the-mern-fullstack-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/',
      },
    ],
  },
  {
    name: `JavaScript Data Structures - The Fundamentals`,
    image: '/images/courses/data-structures-course.jpg',
    learnedList: [
      'What are Data Structures? - (Arrays vs Sets - Objects vs Maps - Weak Set & Weak Map - Work with Linked Lists)',
      'Work With Lists and Tables - Stack Data Structures - Queues - Hash Tables - Understanding Hash Collisions and Solving with Chaining & Open Addressing',
      'What Are Trees and Core Terminology - Work with Different Trees (Depth First & Breadth First Search, Work With Binary Search Trees, Working With AVL Trees, Working With Tries',
      'Work With Priority Queues and Heaps',
      'Work With Graphs',
    ],
    learned: {
      translatorName: 'js_data_structures',
      itemLength: 5,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/javascript-datastructures-the-fundamentals',
      },
    ],
  },
  {
    name: `JavaScript Algorithms - The Fundamentals`,
    image: '/images/courses/algorithms-course.jpg',
    learnedList: [
      'Math Algorithms - Big O Notation and The Right Way of Thinking About Problems',
      'Recursion in Algorithms and Dynamic Programming',
      'Search Algorithms - (Linear and Binary) - The Master Theorem',
      'Sorting Algorithms',
      'Space Complexity',
      'Sets (Array) Algorithms',
      'More Complex Algorithms & How To Solve Code Problems',
    ],
    learned: {
      translatorName: 'js_algorithms',
      itemLength: 7,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/javascript-algorithms-the-fundamentals',
      },
    ],
  },
  {
    name: `Progressive Web Apps (PWA) - The Complete Guide`,
    image: '/images/courses/typescript-course.jpg',
    learnedList: [
      'Understanding The App Manifest and The Service Workers',
      'Implementing Caching With Service Workers - (Static Caching, Dynamic Caching and Cache Versioning)',
      'Advanced Caching and Different Caching Strategies (Post Request and Cache API, Cache with Network Fallback, Network with Cache Fallback, Cache then Network, Cache then Network Dynamic Caching, Cache then Network with Offline Support, Cache Strategies Routing and more...)',
      'Using IndexedDB for Caching Dynamic Data',
      'Background Synchronization',
      'Web Push Notifications',
      'Accessing The Native Device Features',
      'Service Worker Management with Workbox',
      'How to Turn React, Vue or Angular App to Progressive Web Apps',
    ],
    learned: {
      translatorName: 'pwa',
      itemLength: 9,
    },
    links: [
      {
        name: 'https://pro.academind.com/',
        logo: '/images/logo-academind.svg',
        url: 'https://pro.academind.com/p/progressive-web-apps-pwa-the-complete-guide',
      },
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/progressive-web-app-pwa-the-complete-guide/',
      },
    ],
  },
  {
    name: `Microservices with Node JS and React`,
    image: '/images/courses/microservices-course.jpg',
    learnedList: [
      'Fundamentals Around Microservices - Big Problems With Data In Microservices - Communication Strategies Between Services (Sync and Async)',
      'Running Services With Docker and Orchestrating Collections of Services with Kubernetes (Skaffold)',
      'Build a Central Library as an NPM module to Share Code Between Services - Handle Concurrency Issues',
      'Error Handling in Express.js App - Database Management and Modeling (Create Database With Kubernetes)',
      'Fundamental Authentication Strategies - Individual Services Rely On Auth the Service(sync) or They Know How to Authenticate a User(async)',
      'Testing Isolated Microservices (Different Scopes of Testing)',
      'Integrating Next.js Framework to Our Microservice Application',
      'Event Bus Implementation Using NATS Streaming Server (Connecting to NATS in a Node JS World and Managing a NATS Client)',
      'Understanding Event Flow and Handling Concurrency Issues',
      'Worker Services - Implement an Expiration Service',
      'CI / CD (GitHub)',
    ],
    learned: {
      translatorName: 'microservices',
      itemLength: 11,
    },
    links: [
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/microservices-with-node-js-and-react/',
      },
    ],
  },
  {
    name: `NestJS: The Complete Developer's Guide`,
    image: '/images/courses/stephen-grider-nestjs-course.jpg',
    learnedList: [
      'Basics of Nest.js',
      'Validating Request Data With Pipes',
      'Nest.js Architecture - How Do Services and Repositories Work Together',
      'Understanding Modules and Dependency Injection',
      'Persistent Data With Nest.js - (Mongoose, TypeORM and etc)',
      'Big Project - (Creating a Small API and Continue to Explore Some of The Features Around Nest.js)',
      'Custom Data Serialization',
      'Authentication and Authorization (Explore Different Options)',
      'Unit Testing and Integration Testing in Nest.js',
      'Relations With TypeORM',
      'How do the Middleware, Guard, Decorators, and Interceptors Work Together, and In Which Order Do They Run On A Request?',
      'Query Builders With TypeORM',
    ],
    learned: {
      translatorName: 'nestjs_grider',
      itemLength: 12,
    },
    links: [
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/nestjs-the-complete-developers-guide/',
      },
    ],
  },
  {
    name: `The Nest JS Bootcamp - Complete Developer Guide`,
    image: '/images/courses/laith-harb-nestjs-course.jpg',
    learnedList: [
      'Controllersو Decorator Params and Services In Nest.js',
      'Adding Validations With Pipes and DTOs (Enum Validation Pipe, Validation The Body With DTOs and Whitelisting Undesired Properties)',
      'Transforming the Response With Interceptors',
      'Big Project - (ORM Integration, Authentication and Authorization, Middleware, Guards and Interceptors)',
      'Automated Tests In Nest.js',
    ],
    learned: {
      translatorName: 'nestjs_harb',
      itemLength: 5,
    },
    links: [
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/the-nest-js-bootcamp-complete-developer-guide/',
      },
    ],
  },
  {
    name: `Modern GraphQL with Node - Complete Developers Guide`,
    image: '/images/courses/laith-harb-graphql-node-course.jpg',
    learnedList: [
      'What Is GraphQL? and What Problems It Solves? (Prevents Over-Fetching and Under-Fetching - How Data Is Organized)',
      'Queries and Schemas (Scalar, Array and Object Types - Relating Data - File Structure)',
      'What Are Mutations? (Creating, Deleting and Updating Data)',
      'Best Practices And Rules of Designing a GraphQL API (Focusing In On Designing Rules and Principles That We Should Apply and Think About When Creating A GraphQL API - Referring a Tutorial From Shopify)',
      'Project With GraphQL, Node And TypeScript - Database Storage With Prisma V3',
      'Authentication And Authorization In GraphQL',
      'The N + 1 Problem In GraphQL (Caching and Baching Using DataLoader, Pagination)',
      'Connect API To React.js Using Apollo Client (Querying, Mutations and Passing The Auth Token From The Frontend',
    ],
    learned: {
      translatorName: 'graphql',
      itemLength: 8,
    },
    links: [
      {
        name: 'Udemy',
        logo: '/images/logo-udemy.svg',
        url: 'https://www.udemy.com/course/modern-graphql-complete-guide/',
      },
    ],
  },
  {
    name: `JavaScript`,
    image: '/images/courses/javascript-course.jpg',
    learnedList: [
      'JavaScript - ES6, ES7 and ES8',
      'Project-Based JavaScript Course (Video Player, Playing Piano, Drag and Drop, Slider, Snake Game, Images Zoom, Scroll Top, Preload and more)',
    ],
    learned: {
      translatorName: 'js_roocket',
      itemLength: 2,
    },
    links: [
      {
        name: 'https://roocket.ir/',
        logo: '/images/logo-roocket.svg',
        url: 'https://roocket.ir/skills/javascript',
      },
    ],
  },
  {
    name: `HTML and CSS`,
    image: '/images/courses/roocket-html-css-course.jpg',
    learnedList: ['HTML, CSS (Flexbox, CSS Grid)'],
    learned: {
      translatorName: 'html_css_roocket',
      itemLength: 1,
    },
    links: [
      {
        name: 'https://roocket.ir/',
        logo: '/images/logo-roocket.svg',
        url: 'https://roocket.ir/skills/frontend',
      },
    ],
  },
];

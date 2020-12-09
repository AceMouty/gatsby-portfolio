import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kyle Guerrero | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Kyle Guerrero | Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kyle Guerrero',
  subtitle: "I'm a Full Stack Web Developer",
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpeg',
  paragraphOne:
    'As I mentioned above, my name is Kyle Guerrero. I love web development, traveling, tinkering with tech in my free time, teaching code and working on open source projects. Professionally, I have held a number of different roles including: Systems Analyst, Installation Supervisor and Maintenance Technician.',
  paragraphTwo: 'I have been a Web Developer since 2018.',
  paragraphThree:
    'I am experienced working with JavaScript, React, Redux, Node/Express, Python, Flask, Django, GraphQL, HTML & CSS, CSS Preprocessors, Jest, React Testing Library, AWS and Docker.',
  resume: `${process.env.GATSBY_RESUME}`, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ncov19_thumbnail.png',
    title: 'Covid Dash',
    tech: 'React | SCSS | Bootstrap | Plotly | Heroku',
    info:
      'Covid dash allows users to view current up to date stats and news on the novel corona virus. Users can select their state and view data in their specific county and all other counties in the state.',
    info2: '',
    url: 'https://ncov19.us/',
    repo: 'https://github.com/ncov19-us', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'acme-credit_thumbnail.png',
    title: 'Acme Credit',
    tech: 'Angular | Material UI | C# | SQL Server',
    info:
      'At Acme Credit users can easily apply for loans as well as edit any existing loan applications. Applying or editing a loan is easy thanks to our clean and simple UI.',
    info2: '',
    url: 'https://acme-credit.netlify.app/',
    repo: 'https://github.com/Acme-Credit', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'twitoff_thumbnail.png',
    title: 'TwitOff',
    tech: 'jQuery | Bootstrap | Flask | Postgres',
    info:
      'With TwitOff users are able to select two twitter users, write a tweet and see who is more likely to make a similar tweet. The prediction is made with a machine learning model. Users can also add and remove twitter users from the app, along with viewing tweets from the current twitter users in the app.',
    info2: '',
    url: 'https://twitoff.com/',
    repo: 'https://github.com/hurshd0/TwitOff', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rick-n-morty_thumbnail.png',
    title: 'Rick And Morty Fan App',
    tech: 'React | React Router | Semantic UI | Netlify',
    info:
      'The Rick And Morty fan site allows users to view information about the show Rick and Morty. The app displays information about individual characters, different locations that the show takes place in, along with episodes and details about each episode.',
    info2: '',
    url: 'https://rick-n-morty-fan-page.netlify.app/',
    repo: 'https://github.com/AceMouty/Sprint-Challenge-Single-Page-Apps', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/acemouty/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AceMouty',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

module.exports = {
  siteTitle: 'Hola soy Edwin!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Edwin Castro',
  twitterUsername: 'arturo_castro10',
  githubUsername: 'arturocas98',
  authorAvatar: '/images/perfil.jpg',
  authorDescription: `Desarrollador autodidacta apasionado por lo que hago. Siempre interesado en cómo se hacían los sitios, comencé a estudiar HTML por afición.<br />
    Tengo gran motivación para seguir perfeccionando habilidades y crecer profesionalmente. Confío
    plenamente en mi capacidad para proponer ideas y mejoras en sistemas realizados.`,
  skills: [
    {
      name: 'HTML',
      level: 95
    },
    {
      name: 'CSS',
      level: 80
    },
    {
      name: 'Javascript',
      level: 85
    },
    {
      name: 'NodeJs',
      level: 80
    },
    {
      name: 'React',
      level: 50
    },
    {
      name: 'Git',
      level: 90
    },
    {
      name: 'Angular',
      level: 85
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Righttek",
      begin: {
        month: 'ene',
        year: '2021'
      },
      duration: null,
      occupation: "Desarrollador FrontEnd",
      description: "Fui parte del equipo de desarrollo en el área de sistemas" +
        " en la migración de portales a Sharepoint Online utilizando Angular y Sharepoint Framework"
  
    },  {
      company: "Nextcode",
      begin: {
        month: 'ene',
        year: '2020'
      },
      duration: "1 yrs",
      occupation: "Desarrollador Full Stack",
      description: "Fui parte del equipo de desarrollo en el área de sistemas" +
        " brindando mantenimiento y creación de modulos en ERP empresarial usando Laravel y angular."
  
    }, {
      company: "Anapro",
      begin: {
        month: 'dec',
        year: '2016'
      },
      duration: '1 yr e 5 mos',
      occupation: "Fullstack developer",
      description: "Development and maintenance, corrective and preventive, of web applications for the real estate market."
    }, {
      company: "Anapro",
      begin: {
        month: 'set',
        year: '2012'
      },
      duration: '4 yrs e 3 mos',
      occupation: "Support Technician",
      description: "Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool."
  
    },
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/Arturo_Castro10",
    linkedin: "https://www.linkedin.com/in/arturocastro98",
    github: "https://github.com/arturocas98",
    email: "arturocastro98@hotmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portafolio',
      url: '/portifolio',
    }
  ]
}
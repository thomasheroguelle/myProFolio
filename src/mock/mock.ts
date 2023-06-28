export interface IProjets {
  id: number,
  title: string,
  description: string,
  imagesArray: string[],
  card: boolean,
  hasText: boolean,
  text?: string,
  imagesForEshopBase?: string[]
}

export interface IServiceCards {
  id: number,
  title: string,
  description: string,
  image: string,
}
export interface IImgSvg {
  title : string,
  svgImg: string[]
}


export const PROJETS: IProjets[] = [

  {
    id: 1,
    title: "TODO LISTE",
    description: "Todoliste is a web application developed with Angular for efficient management of daily tasks. With its home page, urgent and non-urgent task creation functionality, task visualization page and history page, Todoliste offers a user-friendly, responsive interface. Thanks to Angular, the application offers a fluid and dynamic user experience, making it easy to organize and manage daily tasks.",
    imagesArray: [
      "assets/todoliste/HOME.png",
      "assets/todoliste/CREATE_TASK.png",
      "assets/todoliste/CREATED_TASK.png",
      "assets/todoliste/HISTORIQUE.png"
    ],
    card: false,
    hasText: false
  },

  {
    id: 2,
    title: "Travel Note Book",
    description: "The travel application I developed with Angular offers an immersive and aesthetically pleasing experience thanks to its clean design. It gives users easy access to beautiful images of different countries, while offering detailed information on the pros and cons of each destination. What's more, the application is fully responsive and offers practical features such as saving favorite destinations, travel tips and experience sharing. Thanks to the Angular technology stack, the application guarantees a fluid user experience, with optimal data management and smooth screen transitions.",
    imagesArray: [
      "assets/travelnotebook/HOME.png",
      "assets/travelnotebook/ALBANIE.png",

    ],
    card: false,
    hasText: false
  },
  {
    id: 3,
    title: "E-SHOP B.A.S.E.",
    description: "The eShop B.A.S.E project is an e-commerce platform developed with Angular, featuring a clean design for a pleasant user experience. With its six main pages, including the home page, item list, item detail page, categories, shopping cart and checkout page, the site enables users to navigate easily and complete their purchases with ease. Thanks to the Angular technology stack, the project guarantees a responsive and fluid experience, offering an intuitive interface and optimal functionality for an optimized online shopping experience.",
    imagesArray: [
      "assets/base/HOMEPAGE.png",
    ],
    card: true,
    text: "Click to see more",
    hasText: true,
    imagesForEshopBase: [
      "assets/base/HOMEPAGE.png",
      "assets/base/CATEGORIES.png",
      "assets/base/ARTICLES.png",
      "assets/base/ARTICLE.png",
      "assets/base/COMMANDE.png",
      "assets/base/FORMULAIRE.png",
    ]

  }
];
export const SERVICECARDS: IServiceCards[] = [
  {
    id: 1,
    title: "Back-End",
    description: "I specialize in developing robust back-end applications using Java and Spring. I create APIs, manage databases, and implement scalable architecture to deliver high-performance, secure, and scalable solutions.",
    image: "assets/servicecards/backEnd.png",

  },
  {
    id: 2,
    title: "Front-End",
    description: "I'm passionate about designing modern, responsive websites. With expertise in HTML, CSS, and JavaScript, I create attractive and user-friendly interfaces. Using Angular and TypeScript, I develop advanced and responsive web applications for optimal user experience across devices and browsers.",
    image: "assets/servicecards/htmlcss.png",

  },
  {
    id: 3,
    title: "Web Design",
    description: "I excel in creating visually appealing and intuitive experiences. My focus is on designing unique graphic charters, ensuring color harmony, typography, and ergonomic design. I also create wireframes and mock-ups to plan and visualize website structures prior to development.",
    image: "assets/servicecards/webDesign.png",

  },
  {
    id: 4,
    title: "Wordpress",
    description: "With extensive knowledge of WordPress, I leverage plugins to extend functionality according to project requirements. I optimize websites for search engines, ensuring maximum visibility. Whether it's a blog, showcase site, or e-commerce platform, I provide flexible and high-performance solutions using WordPress.",
    image: "assets/servicecards/wordpress.png"
  },
]
export const IMGSVG: IImgSvg[] = [
  {
    title : "BDD",
    svgImg: [
      "assets/svg/spring.svg",
      "assets/svg/mysql-horizontal.svg",
      "assets/svg/php-icon.svg"
    ]
  },
  {
    title : "Front",
    svgImg: [
      "assets/svg/angular.svg",
      "assets/svg/react.svg",
      "assets/svg/figma-icon.svg"
    ]
  }

];

export interface IProjets {
  id: number,
  title: string,
  description: string,
  imagesArray: string[],
  card: boolean,
  hasText: boolean,
  text?: string,
  imagesForEshopBase? : string[]
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
    imagesForEshopBase : [
      "assets/base/HOMEPAGE.png",
      "assets/base/CATEGORIES.png",
      "assets/base/ARTICLES.png",
      "assets/base/ARTICLE.png",
      "assets/base/COMMANDE.png",
      "assets/base/FORMULAIRE.png",
    ]

  }
];

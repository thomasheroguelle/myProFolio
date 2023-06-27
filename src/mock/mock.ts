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
    description: "loremDZFOUBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
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
    description: "loremDZFOUBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
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
    description: "loremDZFOUBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
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

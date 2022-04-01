import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Artwork",
    categoryId: "artwork",
    categoryImage: "./assets/image2.svg",
  },
  {
    _id: uuid(),
    categoryName: "Photography",
    categoryId: "photography",
    categoryImage: "./assets/image3.svg",
  },
  {
    _id: uuid(),
    categoryName: "Mixed Media Art",
    categoryId: "mixedMediaArt",
    categoryImage: "./assets/image4.svg",
  },
  {
    _id: uuid(),
    categoryName: "Auditory Art",
    categoryId: "auditoryArt",
    categoryImage: "./assets/image5.svg",
  },
];

import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Artwork",
    categoryImage: "./assets/image2.svg",
  },
  {
    _id: uuid(),
    categoryName: "Photography",
    categoryImage: "./assets/image3.svg",
  },
  {
    _id: uuid(),
    categoryName: "Mixed Media Art",
    categoryImage: "./assets/image4.svg",
  },
  {
    _id: uuid(),
    categoryName: "Auditory Art",
    categoryImage: "./assets/image5.svg",
  },
];

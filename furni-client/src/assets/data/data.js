import chair1 from "../images/product-1.png";
import chair2 from "../images/product-2.png";
import chair3 from "../images/product-3.png";
import person1 from "../images/person_1.jpg";
import person2 from "../images/person_2.jpg";
import person3 from "../images/person_3.jpg";
import person4 from "../images/person_4.jpg";
import post1 from "../images/post-1.jpg";
import post2 from "../images/post-2.jpg";
import post3 from "../images/post-3.jpg";

import {
  FiTruck,
  FiShoppingBag,
  FiHeadphones,
  FiRefreshCw,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    image: chair1,
    name: "Nordic Chair",
    price: "$50.00",
  },
  {
    id: 2,
    image: chair2,
    name: "Kruzo Aero Chair",
    price: "$78.00",
  },
  {
    id: 3,
    image: chair3,
    name: "Ergonomic Chair",
    price: "$43.00",
  },
];

const Teams = [
  {
    id: 1,
    image: person1,
    name: "Lawson Arnold",
    position: "CEO, Founder, Atty.",
    about:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },

  {
    id: 2,
    image: person2,
    name: "Jeremy Walker",
    position: "CEO, Founder, Atty.",
    about:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    id: 3,
    image: person3,
    name: "Patrik White",
    position: "CEO, Founder, Atty.",
    about:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    id: 4,
    image: person4,
    name: "Kathryn Ryan",
    position: "CEO, Founder, Atty.",
    about:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
];

const Cards = [
  {
    id: 1,
    icon: FiTruck,
    title: "Fast & Free Shipping",
    about:
      "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    id: 2,
    icon: FiShoppingBag,
    title: "Easy to Shop",
    about:
      "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    id: 3,
    icon: FiHeadphones,
    title: "24/7 Support",
    about:
      "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    id: 4,
    icon: FiRefreshCw,
    title: "Hassle Free Returns",
    about:
      "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
];

const Blogs = [
  {
    id: 1,
    image: post1,
    title: "First Time Home Owner Ideas",
    author: " Kristin Watson",
    date: " Dec 19, 2021",
  },

  {
    id: 2,
    image: post2,
    title: "How To Keep Your Furniture Clean",
    author: "Robert Fox",
    date: " Dec 15, 2021",
  },

  {
    id: 3,
    image: post3,
    title: "Small Space Furniture Apartment Ideas",
    author: "Kristin Watson ",
    date: " Dec 12, 2021",
  },
];

export default { products, Teams, Cards, Blogs };

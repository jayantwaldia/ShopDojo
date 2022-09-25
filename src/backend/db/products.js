import item1 from "../../toolkit/assets/item-1.png";
import item1_1 from "../../toolkit/assets/item-1-1.jpg";
import item1_2 from "../../toolkit/assets/item-1-2.webp";
import item1_3 from "../../toolkit/assets/item-1-3.png";
import item1_4 from "../../toolkit/assets/item-1-4.jpg";
import item2 from "../../toolkit/assets/item-2.png";
import item2_1 from "../../toolkit/assets/item-2-1.webp";
import item2_2 from "../../toolkit/assets/item-2-2.webp";
import item2_3 from "../../toolkit/assets/item-2-3.webp";
import item2_4 from "../../toolkit/assets/item-2-4.webp";
import item3 from "../../toolkit/assets/item-3.png";
import item3_1 from "../../toolkit/assets/item-3-1.webp";
import item3_2 from "../../toolkit/assets/item-3-2.jpg";
import item3_3 from "../../toolkit/assets/item-3-3.jpg";
import item3_4 from "../../toolkit/assets/item-3-4.jpg";
import item4 from "../../toolkit/assets/item-4.png";
import item4_1 from "../../toolkit/assets/item-4-1.jpg";
import item4_2 from "../../toolkit/assets/item-4-2.jpg";
import item4_3 from "../../toolkit/assets/item-4-3.jpg";
import item4_4 from "../../toolkit/assets/item-4-4.jpg";

export const products = [
  {
    _id: 1,
    brand: "Nike Air",
    name: "Women's Running Jacket",
    price: 5995,
    img: item1,
    category: "women",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Women", href: "#" },
      { id: 2, name: "Collection", href: "#" },
    ],
    images: [
      {
        src: item1_4,
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: item1_2,
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: item1_3,
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: item1_1,
        alt: "Model wearing plain white basic tee.",
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
    description:
      "The Nike Air Jacket is a celebration of your outdoor journey, of the time spent in solitude as you chase your running goals. Breathable at the back, with coverage up top, the jacket is geared to keep you feeling loose with every step. A bungee at the back lets you control the shape and feel along your route.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },
  {
    _id: 2,
    brand: "Jordan Essentials",
    name: "Men's Graphic T-Shirt",
    price: 1795,
    img: item2,
    category: "men",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Collection", href: "#" },
    ],
    images: [
      {
        src: item2_4,
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: item2_2,
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: item2_3,
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: item2_1,
        alt: "Model wearing plain white basic tee.",
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
    description:
      "Take flight in signature style. Made from soft, comfortable cotton, this relaxed tee has printed graphics on the chest.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },
  {
    _id: 3,
    brand: "Nike Yoga Dri-FIT Luxe",
    name: "Women's Cropped Tank",
    price: 2895,
    img: item3,
    category: "women",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Women", href: "#" },
      { id: 2, name: "Collection", href: "#" },
    ],
    images: [
      {
        src: item3_4,
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: item3_2,
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: item3_3,
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: item3_1,
        alt: "Model wearing plain white basic tee.",
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
    description:
      "The Nike Yoga Dri-FIT Luxe Cropped Tank is made from Infinalon fabric that feels irresistibly soft and smooth while providing a gently compressive feel that hugs your body, so you can stretch and move without limits. Mixed-material panels create a fluid look and extra breathability while you move.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },
  {
    _id: 4,
    brand: "Nike Dri-FIT Legend",
    name: "Men's Graphic Training T-Shirt",
    price: 1795,
    img: item4,
    category: "men",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Collection", href: "#" },
    ],
    images: [
      {
        src: item4_4,
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: item4_2,
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: item4_3,
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: item4_1,
        alt: "Model wearing plain white basic tee.",
      },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
    description:
      "Commit to the grind and flex hard in the Nike Legend T-Shirt. Made with soft, lightweight jersey fabric, it feels silky smooth on your skin and wicks sweat to keep you dry.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },
];
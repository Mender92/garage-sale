import caseImage from "../assets/images/case.jpeg";
import guitarImage from "../assets/images/guitar.jpeg";
import snusImage from "../assets/images/snus.jpeg";
import thinkpadImage from "../assets/images/thinkpad.jpeg";

const products = [
  {
    id: 1,
    title: "Electric Guitar",
    price: "€350",
    image: guitarImage,
    description:
      "Well-maintained electric guitar in excellent condition. Perfect for beginners and experienced players alike.",
  },
  {
    id: 2,
    title: "Travel Suitcase",
    price: "€20",
    image: caseImage,
    description:
      "Well-maintained travel suitcase in good condition. Spacious, lightweight, and easy to maneuver thanks to its smooth-rolling wheels. Perfect for vacations, business trips, or weekend getaways. Fully functional with normal signs of use.",
  },
  {
    id: 3,
    title: "Outdare Nicotine Pouches",
    price: "€5/can",
    image: snusImage,
    description:
      "Accidentally purchased nicotine pouches instead of tobacco snus. €5 per can when buying all 20 cans together. Otherwise, the price is €6 per can. All cans are unopened and in perfect condition.",
  },
  {
    id: 4,
    title: "Lenovo ThinkPad X250",
    price: "€100",
    image: thinkpadImage,
    description:
      "Well-maintained Lenovo ThinkPad X250 laptop with a fast SSD for responsive performance. Ideal for work, school, web browsing and everyday use. Selling because I no longer need it.",
  },
];

export default products;
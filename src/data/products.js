import caseImage from "../assets/images/case.jpeg";
import guitarImage from "../assets/images/guitar.jpeg";
import snusImage from "../assets/images/snus.jpeg";

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
      "Accidentally purchased nicotine pouches instead of energy pouches. The price is 5€/can when buying all 20 cans together. Otherwise, the price is 6€/can. All cans are unopened and in perfect condition.",
  },
];

export default products;
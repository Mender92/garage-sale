import caseImage from "../assets/images/case.jpeg";
import guitarImage from "../assets/images/guitar.jpeg";
import snusImage from "../assets/images/snus.jpeg";
import thinkpadImage from "../assets/images/thinkpad.jpeg";
import echoImage from "../assets/images/echo.jpeg";
import horseImage from "../assets/images/horse.jpeg";

const products = [
  {
    id: 1,
    title: "Electric Guitar",
    price: "€300",
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
      "Accidentally purchased nicotine pouches instead of tobacco snus. I have 20 cans available in total. €5 per can when buying all 20 cans together. Otherwise, the price is €6 per can. All cans are unopened and in perfect condition.",
  },
  {
    id: 4,
    title: "Lenovo ThinkPad X250",
    price: "€100",
    image: thinkpadImage,
    description:
      "Well-maintained Lenovo ThinkPad X250 laptop with a fast SSD for responsive performance. Ideal for work, school, web browsing and everyday use. Selling because I no longer need it.",
  },
  {
    id: 5,
    title: "Amazon Echo (Alexa)",
    price: "€50",
    image: echoImage,
    description:
      "Smart speaker with voice control for playing music, getting information, setting reminders and controlling smart home devices. Elegant black design with Wi-Fi and Bluetooth connectivity. Used, with minor signs of wear.",
  },
  {
    id: 6,
    title: "Igrača Napihljiv konj - NOVO!",
    price: "€15",
    image: horseImage,
    description:
      "Free 2 Play skakalna žival s plišasto prevleko - konj. Novo in neuporabljeno.",
  },
];

export default products;
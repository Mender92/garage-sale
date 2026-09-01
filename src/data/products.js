import caseImage from "../assets/images/case.jpeg";
import guitarImage from "../assets/images/guitar.jpeg";
import snusImage from "../assets/images/snus.jpeg";
import thinkpadImage from "../assets/images/thinkpad.jpeg";
import echoImage from "../assets/images/echo.jpeg";
import horseImage from "../assets/images/horse.jpeg";

const products = [
  {
    id: 1,
    title: {
      en: "Electric Guitar",
      sl: "Električna kitara",
    },
    price: "€300",
    image: guitarImage,
    description: {
      en: "Well-maintained electric guitar in excellent condition. Perfect for beginners and experienced players alike.",
      sl: "Dobro ohranjena električna kitara v odličnem stanju. Primerna tako za začetnike kot za izkušene igralce.",
    },
  },

  {
    id: 2,
    title: {
      en: "Travel Suitcase",
      sl: "Potovalni kovček",
    },
    price: "€20",
    image: caseImage,
    description: {
      en: "Well-maintained travel suitcase in good condition. Spacious, lightweight, and easy to maneuver thanks to its smooth-rolling wheels. Perfect for vacations, business trips, or weekend getaways. Fully functional with normal signs of use.",
      sl: "Dobro ohranjen potovalni kovček v dobrem stanju. Prostoren, lahek in enostaven za premikanje zaradi gladko tekočih koles. Primeren za počitnice, poslovna potovanja ali vikend izlete. Popolnoma funkcionalen z običajnimi znaki uporabe.",
    },
  },

  {
    id: 3,
    title: {
      en: "Outdare Nicotine Pouches",
      sl: "Outdare nikotinske vrečke",
    },
    price: "€5/can",
    image: snusImage,
    description: {
      en: "Accidentally purchased nicotine pouches instead of tobacco snus. I have 20 cans available in total. €5 per can when buying all 20 cans together. Otherwise, the price is €6 per can. All cans are unopened and in perfect condition.",
      sl: "Po pomoti sem kupil nikotinske vrečke namesto tobačnega snusa. Skupaj imam na voljo 20 škatel. Cena je 5 € na škatlo pri nakupu vseh 20 škatel skupaj. Sicer je cena 6 € na škatlo. Vse škatle so neodprte in v brezhibnem stanju.",
    },
  },

  {
    id: 4,
    title: {
      en: "Lenovo ThinkPad X250",
      sl: "Lenovo ThinkPad X250",
    },
    price: "€100",
    image: thinkpadImage,
    description: {
      en: "Well-maintained Lenovo ThinkPad X250 laptop with a fast SSD for responsive performance. Ideal for work, school, web browsing and everyday use. Selling because I no longer need it.",
      sl: "Dobro ohranjen prenosnik Lenovo ThinkPad X250 s hitrim SSD diskom za odzivno delovanje. Idealen za delo, šolo, brskanje po spletu in vsakodnevno uporabo. Prodajam, ker ga ne potrebujem več.",
    },
  },

  {
    id: 5,
    title: {
      en: "Amazon Echo (Alexa)",
      sl: "Amazon Echo (Alexa)",
    },
    price: "€50",
    image: echoImage,
    description: {
      en: "Smart speaker with voice control for playing music, getting information, setting reminders and controlling smart home devices. Elegant black design with Wi-Fi and Bluetooth connectivity. Used, with minor signs of wear.",
      sl: "Pametni zvočnik z glasovnim upravljanjem za predvajanje glasbe, pridobivanje informacij, nastavljanje opomnikov in upravljanje naprav pametnega doma. Eleganten črn dizajn z Wi-Fi in Bluetooth povezavo. Rabljen, z manjšimi znaki uporabe.",
    },
  },

  {
    id: 6,
    title: {
      en: "Inflatable Horse Toy - NEW!",
      sl: "Igrača napihljiv konj - NOVO!",
    },
    price: "€15",
    image: horseImage,
    description: {
      en: "Free 2 Play jumping animal with a plush cover - horse. New and unused.",
      sl: "Free 2 Play skakalna žival s plišasto prevleko - konj. Novo in neuporabljeno.",
    },
  },
];

export default products;
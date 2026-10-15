import neopreneImage from "../assets/images/neopren.jpeg";
import babyCotImage from "../assets/images/posteljica.jpeg";
import guitarImage from "../assets/images/guitar.jpeg";
import echoImage from "../assets/images/echo.jpeg";
import horseImage from "../assets/images/horse.jpeg";

const products = [
  {
    id: 1,
    title: {
      en: "5 mm Spearfishing Wetsuit + Free Fins",
      sl: "Neoprenska obleka 5 mm + plavuti gratis",
    },
    cardDescription: {
      en: "5 mm wetsuit, size 4. Fins included for free.",
      sl: "Obleka debeline 5 mm, velikost 4. Plavuti gratis.",
    },
    price: "€150",
    condition: {
      en: "Used",
      sl: "Rabljeno",
    },
    image: neopreneImage,
    description: {
      en: "5 mm neoprene wetsuit for spearfishing, size 4. Lightly used and well-preserved. Fins are included for free.",
      sl: "5 mm neoprenska obleka za podvodni ribolov, velikost 4. Malo rabljena in dobro ohranjena. Plavuti so vključene brezplačno.",
    },
  },
  {
    id: 2,
    title: {
      en: "Baby Cot",
      sl: "Otroška posteljica",
    },
    cardDescription: {
      en: "Solid beech wood, adjustable base and wheels.",
      sl: "Masivni bukov les, nastavljivo dno in kolesa.",
    },
    price: "€150",
    condition: {
      en: "Used",
      sl: "Rabljeno",
    },
    image: babyCotImage,
    description: {
      en: "Well-preserved SATLER LIP Julija baby cot made of solid beech wood. Includes a 120 × 60 cm mattress. The side rail lowers and slides underneath the cot on rails. The bed base is adjustable to five heights, and the cot has wheels. External dimensions: 70 × 95 × 130 cm.",
      sl: "Dobro ohranjena otroška posteljica SATLER LIP Julija iz masivnega bukovega lesa. Vključuje vzmetnico velikosti 120 × 60 cm. Spustna stranica se po vodilih spusti in potisne pod posteljico. Dno posteljice je nastavljivo na pet višin, posteljica pa ima tudi kolesa. Zunanje mere: 70 × 95 × 130 cm.",
    },
  },
  {
    id: 3,
    title: {
      en: "Electric Guitar",
      sl: "Električna kitara",
    },
    cardDescription: {
      en: "Well-maintained and suitable for players of all levels.",
      sl: "Dobro ohranjena, primerna za začetnike in izkušene.",
    },
    price: "€300",
    condition: {
      en: "Used",
      sl: "Rabljeno",
    },
    image: guitarImage,
    description: {
      en: "Well-maintained electric guitar in excellent condition. Perfect for beginners and experienced players alike.",
      sl: "Dobro ohranjena električna kitara v odličnem stanju. Primerna tako za začetnike kot za izkušene igralce.",
    },
  },
  {
    id: 4,
    title: {
      en: "Amazon Echo (Alexa)",
      sl: "Amazon Echo (Alexa)",
    },
    cardDescription: {
      en: "Smart speaker with Alexa, Wi-Fi and Bluetooth.",
      sl: "Pametni zvočnik z Alexo, Wi-Fi in Bluetooth povezavo.",
    },
    price: "€50",
    condition: {
      en: "Used",
      sl: "Rabljeno",
    },
    image: echoImage,
    description: {
      en: "Smart speaker with voice control for playing music, getting information, setting reminders and controlling smart home devices. Elegant black design with Wi-Fi and Bluetooth connectivity. Used, with minor signs of wear.",
      sl: "Pametni zvočnik z glasovnim upravljanjem za predvajanje glasbe, pridobivanje informacij, nastavljanje opomnikov in upravljanje naprav pametnega doma. Eleganten črn dizajn z Wi-Fi in Bluetooth povezavo. Rabljen, z manjšimi znaki uporabe.",
    },
  },
  {
    id: 5,
    title: {
      en: "Inflatable Horse Toy - NEW",
      sl: "Igrača napihljiv konj - NOVO",
    },
    cardDescription: {
      en: "New and unused jumping toy with a plush cover.",
      sl: "Nova, neuporabljena skakalna igrača s plišasto prevleko.",
    },
    price: "€15",
    condition: {
      en: "New",
      sl: "Novo",
    },
    image: horseImage,
    description: {
      en: "Free 2 Play jumping animal with a plush cover - horse. New and unused.",
      sl: "Free 2 Play skakalna žival s plišasto prevleko - konj. Novo in neuporabljeno.",
    },
  },
];

export default products;
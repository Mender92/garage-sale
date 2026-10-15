import { useOutletContext } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import translations from "../data/translations";

function Contact() {
  const { language } = useOutletContext();
  const t = translations[language].contact;

  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold">
          {t.title}
        </h1>

        <p className="mt-8 text-lg leading-8">
          {t.description}
        </p>

        <Button
          href="https://www.instagram.com/domen_kjuder/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 gap-3 px-8 py-4"
        >
          <FaInstagram className="text-2xl" />
          @domen_kjuder
        </Button>
      </div>
    </Section>
  );
}

export default Contact;
import { useOutletContext } from "react-router-dom";
import Section from "../components/layout/Section";
import { FaInstagram } from "react-icons/fa";
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

        <a
          href="https://www.instagram.com/domen_kjuder/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-3 rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
        >
          <FaInstagram className="text-2xl" />
          @domen_kjuder
        </a>
      </div>
    </Section>
  );
}

export default Contact;
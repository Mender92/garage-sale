import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Section from "../components/layout/Section";
import profileImage from "../assets/profile.jpeg";
import translations from "../data/translations";

function About() {
  const [showMore, setShowMore] = useState(false);
  const { language } = useOutletContext();

  const t = translations[language].about;

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* Text content */}
        <div>
          <h1 className="text-5xl font-bold">
            {t.title}
          </h1>

          {/* Intro */}
          <p className="mt-8 max-w-xl text-xl leading-10">
            {t.intro}{" "}

            <button
              type="button"
              onClick={() => setShowMore(!showMore)}
              className="font-bold text-gray-500 hover:text-gray-700 transition"
            >
              {showMore ? t.less : t.more}
            </button>
          </p>

          {/* Expanded content */}
          {showMore && (
            <div className="mt-6 max-w-xl text-xl leading-10">

              <p>
                {t.paragraph1}
              </p>

              <p className="mt-6">
                {t.paragraph2}
              </p>

              <p className="mt-6">
                {t.paragraph3}
              </p>

              {/* Social links */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/domen-kjuder-64b470121/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-black text-white px-6 py-3 hover:opacity-80 transition"
                >
                  {t.linkedin}
                </a>

                <a
                  href="https://dribbble.com/domen-kjuder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#1F1F1F] px-6 py-3 hover:bg-black hover:text-white transition"
                >
                  {t.dribbble}
                </a>
              </div>

            </div>
          )}
        </div>

        {/* Profile image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={profileImage}
            alt={t.imageAlt}
            className="w-2/3 rounded-2xl object-cover"
          />
        </div>

      </div>
    </Section>
  );
}

export default About;
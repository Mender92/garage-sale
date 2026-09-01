import { Link, useOutletContext } from "react-router-dom";
import Section from "../layout/Section";
import heroImage from "../../assets/hero.png";
import translations from "../../data/translations";

function Hero() {
  const { language } = useOutletContext();
  const t = translations[language].home;

  return (
    <Section>
      <div className="grid lg:grid-cols-2 items-center gap-20">

        <div>
          <div className="flex items-start gap-6">
            <h1 className="text-8xl lg:text-9xl font-black leading-none">
              {t.greeting}
            </h1>

            <div className="pt-2">
              <p className="text-3xl lg:text-4xl font-medium">
                {t.myName}
              </p>

              <h2 className="text-5xl lg:text-6xl font-semibold mt-2">
                {t.name}
              </h2>
            </div>
          </div>

          <p className="mt-2 max-w-xl text-xl leading-10">
            {t.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-6">
            <Link
              to="/garage-sale"
              className="rounded-full bg-black text-white px-10 py-4 text-lg transition hover:opacity-90"
            >
              {t.garageSaleButton}
            </Link>

            <Link
              to="/about"
              className="rounded-full border border-black px-10 py-4 text-lg transition hover:bg-black hover:text-white"
            >
              {t.aboutButton}
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="Garage Sale Hero"
            className="w-full rounded-3xl object-cover opacity-0 animate-[fadeIn_1s_ease-in_forwards]"
          />
        </div>

      </div>
    </Section>
  );
}

export default Hero;
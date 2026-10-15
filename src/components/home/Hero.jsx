import { useOutletContext } from "react-router-dom";
import Section from "../layout/Section";
import Button from "../ui/Button";
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
              <p className="text-3xl lg:text-4xl font-medium translate-y-2">
                {t.myName}
              </p>

              <h2 className="text-5xl lg:text-6xl font-semibold mt-2">
                {t.name}
              </h2>
            </div>
          </div>

          <p className="mt-8 max-w-xl text-xl leading-10">
            {t.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-6">
            <Button
              to="/garage-sale"
              variant="primary"
              className="px-10 py-4 text-lg"
            >
              {t.garageSaleButton}
            </Button>

            <Button
              to="/about"
              className="border-black px-10 py-4 text-lg"
            >
              {t.aboutButton}
            </Button>
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
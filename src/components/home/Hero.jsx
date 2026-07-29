import { Link } from "react-router-dom";
import Section from "../layout/Section";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 items-center gap-20">

        <div>
          <div className="flex items-start gap-6">
            <h1 className="text-8xl lg:text-9xl font-black leading-none">
              Hi,
            </h1>

            <div className="pt-2">
              <p className="text-3xl lg:text-4xl font-medium">
                my name
              </p>

              <h2 className="text-5xl lg:text-6xl font-semibold mt-2">
                is Domen.
              </h2>
            </div>
          </div>

          <p className="mt-2 max-w-xl text-xl leading-10">
            Here you'll find a few things from my apartment that I no longer
            use but are still in great shape and ready for a new home. Feel
            free to browse around, maybe something here is just what
            you need.
          </p>

          <div className="mt-6 flex flex-wrap gap-6">
            <Link
              to="/garage-sale"
              className="rounded-full bg-black text-white px-10 py-4 text-lg transition hover:opacity-90"
            >
              Garage Sale
            </Link>

            <Link
              to="/about"
              className="rounded-full border border-black px-10 py-4 text-lg transition hover:bg-black hover:text-white"
            >
              About Project
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
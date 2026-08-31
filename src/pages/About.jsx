import Section from "../components/layout/Section";
import profileImage from "../assets/profile.jpeg";

function About() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-bold">
            About Project
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-10">
            Garage Sale started as a simple idea: combine something practical
            with something I genuinely enjoy. Instead of letting things I no
            longer use sit around collecting dust, I decided to build a
            website where I can give them a new home.
          </p>

          <p className="mt-6 max-w-xl text-xl leading-10">
            At the same time, this project gives me the opportunity to improve
            my UX design and front-end development skills through real
            hands-on experience. Building, testing and continuously improving
            the site helps me better understand how digital products come
            together — and honestly, because creating things like this is
            simply cool.
          </p>

          <a
            href="https://www.linkedin.com/in/domen-kjuder-64b470121/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 rounded-full bg-black px-6 py-3 text-white"
          >
            LinkedIn
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={profileImage}
            alt="Domen"
            className="w-full rounded-2xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </Section>
  );
}

export default About;
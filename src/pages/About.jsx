import { Link } from "react-router-dom";
import Section from "../components/layout/Section";
import profileImage from "../assets/profile.jpeg.jpeg";

function About() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 items-center gap-20">
        <div>
          <h1 className="text-5xl font-bold">
            About Project
          </h1>

          <p className="mt-2 max-w-xl text-xl leading-10">
          Garage Sale started as a simple idea: combine something practical with
          something I genuinely enjoy. Instead of letting things I no longer use sit
          around collecting dust, I decided to build a website where I can give them a
          new home.
          </p>

          <p className="mt-6 max-w-xl text-xl leading-10">
          At the same time, this project gives me the opportunity to improve my UX
          design and front-end development skills through real hands-on experience.
         Building, testing and continuously improving the site helps me better
         understand how digital products come together—and honestly, because creating
        things like this is simply cool.
          </p>

          <div className="mt-6 flex flex-wrap gap-6">
            <Link
              to="/contact"
              className="rounded-full bg-black text-white px-10 py-4 text-lg transition hover:opacity-90"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
  <div className="overflow-hidden rounded-3xl max-w-md">
    <img
      src={profileImage}
      alt="Domen"
      className="w-full rounded-3xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
</div>
      </div>
    </Section>
  );
}

export default About;
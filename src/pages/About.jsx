import { Link } from "react-router-dom";
import Section from "../components/layout/Section";
import profileImage from "../assets/profile.jpeg.jpeg";

function About() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-bold">
            About Me
          </h1>

          <p className="mt-8 text-lg leading-8">
            Hi, I'm Domen. I'm passionate about web development and enjoy
            building modern, responsive websites and web applications.
          </p>

          <p className="mt-6 text-lg leading-8">
            This portfolio showcases my projects, skills and a few items from
            my personal garage sale. I'm always looking to improve my knowledge
            and create clean, user-friendly experiences.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 rounded-full bg-black px-6 py-3 text-white"
          >
            Contact Me
          </Link>
        </div>

        <div>
          <img
            src={profileImage}
            alt="Domen"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </Section>
  );
}

export default About;
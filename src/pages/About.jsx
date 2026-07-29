import { Link } from "react-router-dom";
import Section from "../components/layout/Section";
import profileImage from "../assets/profile.jpeg.jpeg";

function About() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 items-center gap-20">
        <div>
          <h1 className="text-5xl font-bold">
            About Me
          </h1>

          <p className="mt-2 max-w-xl text-xl leading-10">
            Hi, I'm Domen, a UX Designer who enjoys creating seamless digital
            experiences that are intuitive and accessible. I believe
            that great design is about solving real user problems and making technology easy to use.
          </p>

          <p className="mt-6 max-w-xl text-xl leading-10">
            Building websites is a natural extension of my design process. I believe
            that understanding how products are developed makes me a better designer,
            while hands-on projects are the best way to deepen my UX knowledge. This
            portfolio reflects that journey by combining design thinking with practical
            front-end development.
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
import { useState } from "react";
import Section from "../components/layout/Section";
import profileImage from "../assets/profile.jpeg";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* Text content */}
        <div>
          <h1 className="text-5xl font-bold">
            About Project
          </h1>

          {/* Intro */}
          <p className="mt-8 max-w-xl text-xl leading-10">
            Garage Sale is a personal project where I sell things I no longer
            need, while using the project as an opportunity to learn and
            practice building digital products.{" "}

            <button
              type="button"
              onClick={() => setShowMore(!showMore)}
              className="font-bold text-gray-500 hover:text-gray-700 transition"
            >
              {showMore ? "Less" : "More"}
            </button>
          </p>

          {/* Expanded content */}
          {showMore && (
            <div className="mt-6 max-w-xl text-xl leading-10">

              <p>
                This project is also part of my journey as a UX Designer. I
                want to better understand what happens beyond the design
                process and learn how digital products are actually built.
              </p>

              <p className="mt-6">
                As part of that learning process, I am learning the fundamentals
                of front-end development, React and JavaScript.
              </p>

              <p className="mt-6">
                Garage Sale is therefore a combination of something practical
                and something I enjoy. You can see more of my work on Dribbble,
                and I'm always open to feedback on LinkedIn.
              </p>

              {/* Social links */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/domen-kjuder-64b470121/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-black text-white px-6 py-3 hover:opacity-80 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://dribbble.com/domen-kjuder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#1F1F1F] px-6 py-3 hover:bg-black hover:text-white transition"
                >
                  Dribbble
                </a>
              </div>

            </div>
          )}
        </div>

        {/* Profile image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={profileImage}
            alt="Domen"
            className="w-2/3 rounded-2xl object-cover"
          />
        </div>

      </div>
    </Section>
  );
}

export default About;
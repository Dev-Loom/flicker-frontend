import React from "react";

const About = () => {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/2 mb-4 md:mb-0"></div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Flicker Fantasy</strong> offers an exclusive private theatre and event celebration experience. Guests can reserve our theaters for watching their favourite movies and shows on a
              large screen, as well as celebrating memorable occasions such as birthdays, anniversaries, dates and many more. We offer high-fidelity audio of Dolby Atmos compliant sound systems and 4k
              Video.
            </p>
            <br></br>
            <br></br>
            <p className="text-sm text-gray-700 leading-relaxed">
              At <strong>Flicker Fantasy</strong>, we go beyond just offering private theatre and exceptional event experiences. We also provide delicious food, cakes and flowers along with stunning
              decorations to enhance your celebrations.We believe that every element should come together seamlessly to create an unforgettable experience for you and your guests. Our dedicated team
              is committed to ensuring every detail is taken care of, so you can relax and fully enjoy your time with us.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

import React from "react";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">About Us</h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-4">
            <strong>Flicker Fantasy</strong> offers an exclusive private theatre and event celebration experience. Guests can reserve our theaters for watching their favourite movies and shows on a
            large screen, as well as celebrating memorable occasions such as birthdays, anniversaries, dates and many more. We offer high-fidelity audio of Dolby Atmos compliant sound systems and 4k
            Video.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            At <strong>Flicker Fantasy</strong>, we go beyond just offering private theatre and exceptional event experiences. We also provide delicious food, cakes and flowers along with stunning
            decorations to enhance your celebrations.We believe that every element should come together seamlessly to create an unforgettable experience for you and your guests. Our dedicated team is
            committed to ensuring every detail is taken care of, so you can relax and fully enjoy your time with us.
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
          <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
          <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
          <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import heroImg from "../../assets/hero-graphics.svg";

const Hero = () => {
  return (
    <section className="-mt-[92px] bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 md:-mt-[118px]">
      <div className="container">
        <div className="mx-auto grid w-10/12 items-center md:grid-cols-2">
          <img
            className="animate-updown ml-auto object-cover md:order-2"
            src={heroImg}
            width="500px"
            height="500px"
            alt="Banner"
          />
          <div>
            <h1 className="mb-8 text-4xl font-bold leading-[1.1] lg:text-[56px]">
              The Future of Learning starts with students at the center
            </h1>
            <a className="rounded-[44px] bg-[#038C61] px-5 py-2.5" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Welcome to our travel website, where your journey begins. We are
            dedicated to helping you explore the world and create unforgettable
            memories. Our team of travel experts is committed to providing you
            with personalized and seamless travel experiences. From breathtaking
            landscapes to vibrant cityscapes, we offer a wide range of
            destinations to suit every traveler's taste. We believe in the
            transformative power of travel and strive to make each trip special.
            Our carefully curated itineraries are designed to showcase the best
            of each destination, ensuring you get the most out of your travels.
            Whether you're seeking adventure, relaxation, or cultural immersion,
            we have something for everyone. Join us on an extraordinary journey
            and discover the wonders of the world with us. Let us take care of
            the details so you can focus on enjoying every moment. Your
            adventure starts here.
          </p>
          <br />
          <p>
            Join us and discover the beauty and wonder that awaits around every
            corner.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;

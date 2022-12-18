import React from "react";
import NavBar from "../components/NavBar/NavBar";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="py-11" />
      <div className="flex flex-col items-center justify-center w-full h-full px-3">
        <h1 className="font-large text-5xl py-3">About</h1>
        <p className="font-large text-3xl py-3">
            Hey! My name is Orr.
        </p>
        <p className="font-small text-lg py-3">
            I am a person who likes math and programming. 
        </p>
      </div>
    </>
  );
};

export default About;

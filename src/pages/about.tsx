import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main>
        <div className="py-11" />
        <div className="flex flex-col text-center items-center justify-center w-full h-full px-3">
          <h1 className="font-large text-5xl py-3">About</h1>
          <p className="font-large text-3xl py-3">
            My name is Orr Shalev, and I am the developer behind Math Toolbox.
          </p>
          <p className="font-small text-lg py-3 md:px-60">
            I am an undergraduate computer science student in the University of
            Georgia. Having taken a few higher-math courses (such as discrete
            mathematics and linear algebra), I found it a bit fraustrating that
            I could not find an easy way to play around and experiment with the
            ideas and concepts that I learned about in class. This inspired me
            to create my own Python scripts that would simulate these ideas. I
            felt that being able to use the tools I build helped me understand
            what I was learning in my classes way better, so I decided that it
            is time to make a website that helps other students like me. Hope
            you enjoy the website!
          </p>
          <p className="font-small text-lg py-3 md:px-60">
            Feel free to connect with me on{" "}
            <a className="underline text-blue-600" href="https://www.linkedin.com/in/orr-shalev/"> LinkedIn</a>, or
            check out my <a className="underline text-blue-600" href="https://github.com/orrshalev">GitHub!</a>
          </p>
        </div>
      </main>
    </>
  );
};

export default About;

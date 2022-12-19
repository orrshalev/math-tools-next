import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";

import cartesianPic from "/public/cartesian.png";
import powerSetPic from "/public/powerset.png";
import booleanPic from "/public/boolean.png";
import basePic from "/public/base.png";
import NavBar from "../components/NavBar/NavBar";

type ToolCardProps = {
  name: string;
  image: StaticImageData;
  description: string;
  linkRef: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Math Toolbox</title>
        <meta name="description" content="Further your math education today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <div className="py-7" />
        <h1 className="text-5xl pt-1 md:text-[5rem] leading-normal font-extrabold text-gray-700 font-large">
          Math Toolbox
        </h1>
        <p className="text-2xl text-gray-700 font-small">
          Further your math education today!
        </p>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-4 sm:w-2/3">
          <ToolCard
            name="Cartesian Product Calculator"
            image={cartesianPic}
            description="Calculate the Cartesian product of 2-10 sets."
            linkRef="/tools/cartesian-product-calculator"
          />
          <ToolCard
            name="Power Set Calculator"
            image={powerSetPic}
            description="Calculate the power set of a set."
            linkRef="/tools/power-set-calculator"
          />
          <ToolCard
            name="Boolean Algebra"
            image={booleanPic}
            description="Find the truth table of a boolean expression."
            linkRef="/tools/boolean-algebra"
          />
          <ToolCard
            name="Number Base Converter"
            image={basePic}
            description="Convert number bases 2-35"
            linkRef="/tools/number-base-converter"
            />
        </div>
      </main>
    </>
  );
};

const ToolCard = ({ name, image, description, linkRef }: ToolCardProps) => {
  return (
    <Link href={linkRef}>
      <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105 font-large">
        <h2 className="text-lg text-gray-700 pb-5">{name}</h2>
        <Image 
          src={image} 
          alt="test"
          height={200}
          width={200}
          layout="responsive" />
        <p className="text-sm text-gray-600 pt-5 font-small">{description}</p>
      </section>
    </Link>
  );
};

export default Home;

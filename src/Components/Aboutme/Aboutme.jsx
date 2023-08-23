import React from "react";
import { Link } from "react-router-dom";
const Aboutme = () => {
  return (
    <section className=" mx-20 flex flex-col text-center items-center text-neutral-800">
      <span className="text-5xl my-10 ">About Me</span>
      <span className="text-2xl">
      I am Prince Gautam, currently enrolled in a Product Engineering Course at the School of Accelerated Learning. 
      Fueled by an unwavering passion for exploration and learning, I am devoted to channeling this enthusiasm into the realm of Software Development.
      Apart from my studies, I find solace in playing musical instruments and refining my sketching skills. Life, to me, is an ever-unfolding journey of discovery, 
      and I am resolute in maximizing its potential by creating innovative and impactful software solutions.
      </span>
      <Link
        to="/resume"
        className="border-4 block w-fit my-12 px-2 py-1 rounded font-semibold text-xl hover:bg-neutral-400"
      >
        Resume
      </Link>
    </section>
  );
};

export default Aboutme;

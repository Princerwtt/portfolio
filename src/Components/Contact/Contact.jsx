import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";


const Contact = () => {
  return (
    <section
      className="my-10  flex flex-col text-center items-center text-neutral-800 bg-neutral-100"
      id="contact"
    >
      <span className="text-5xl my-10">Get In Touch</span>
      <p className="px-24 text-xl">
      I'm on the hunt for exhilarating opportunities as a Frontend Developer! 
      Whether you're in the know about any exciting openings or just want to exchange a friendly "hello," 
      feel free to connect with me at ,{" "}
        <a
  href="mailto:princerawatnz@gmail.com?subject=Reaching%20Out&body=Hello%20Prince,"
  className="text-blue-600"
  target="_blank"
  rel="noopener noreferrer"
>
  Princerawatnz@gmail.com
</a>
      </p>
      <div className="flex text-4xl my-6">
        <a
          href="https://github.com/princerwtt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="m-2 hover:text-blue-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/prince-rawattt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrLinkedin className="m-2 hover:text-blue-700" />
        </a>
      </div>
    </section>
  );
};

export default Contact;

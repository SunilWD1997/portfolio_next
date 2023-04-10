import Heading from "./Heading";
import Card from "./Card";
import { MdComputer } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
import { FaBook } from "react-icons/fa";

const WhatIdo = () => {
  return (
    <section className="mx-[5%] my-[80px]">
      <Heading title="What I Do" />

      <div className="grid  grid-cols-1 md:grid-cols-3 gap-10 mt-[60px]">
        <Card heading='Creative Designs' icon={<MdComputer />} />
        <Card heading='Free Lancing' icon={<BsLightbulb />} />
        <Card heading='Web Developement' icon={<FaBook />}/>
      </div>
    </section>
  );
};

export default WhatIdo;

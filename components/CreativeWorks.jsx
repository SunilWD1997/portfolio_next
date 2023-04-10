import React from "react";
import Heading from "./Heading";

const CreativeWorks = () => {
  return (
    <section className="mx-[5%] my-[70px]">
      <Heading title="Creative Works" />

      <div className="mt-[40px]  grid grid-cols-1 md:grid-cols-3 gap-5">
      
        <div className="bg-red-200 row-span-2  relative overflow-hidden group">
        <img src="/nike.png" className="h-[100%] w-auto" alt="" />
          <div className="px-[20px] py-[20px] bg-[grey] absolute top-[-100%] left-[0%] w-[100%] h-[100%] group-hover:top-[0%] duration-100">

            <h3>1.On Going Project</h3>
            My Current ongoing project is Nike ecommerce website. i am dveloping
            this website using Next.js and tailwindCSS
          </div>
        </div>

        <div className=" bg-orange-200 relative group overflow-hidden">
         
         <img src="/travel.png" className="h-[100%] w-[100%]" alt="" />

          <div className=" text-white absolute top-[0%] left-[-100%] bg-black w-[100%] h-[100%] p-4 group-hover:left-[0%] duration-100">
            <h1 className="font-medium ">2.Tourist/Travel Website</h1>
            <p className="mt-2">
              This is the website i have developed to give information across india
              of different wonder regions that have no idea of general human
              being's
            </p>
          </div>
        </div>

        <div className=" bg-orange-200 relative group overflow-hidden">
        <img src="/portfolio.png" className="h-[100%] w-[100%]" alt="" />
          <div className=" text-white absolute top-[0%] right-[-100%] bg-black w-[100%] h-[100%] p-4 group-hover:right-[0%] duration-100">
            <h1 className="font-medium ">3.Portfolio Website</h1>
            <p className="mt-2">
              This is the  website i have developed to give information about me
              and my profession, experience as well.
            </p>
          </div>
        </div>

        <div className=" bg-orange-200 relative group overflow-hidden">
        <img src="/amazon.png" className="h-[100%] w-[100%]" alt="" />
          <div className=" text-white absolute top-[0%] left-[-100%] bg-black w-[100%] h-[100%] p-4 group-hover:left-[0%] duration-100">
            <h1 className="font-medium ">4.React Eccomerce website</h1>
            <p className="mt-2">
              This is the website i have developed to clear all the minimum 
             required to be learn to become a succesfull webdeveloper using React.js, Starpi and other react libraries.
            </p>
          </div>
        </div>

        <div className=" bg-orange-200 relative group overflow-hidden">
        <img src="/todo.png" className="h-[100%] w-[100%] "  alt="" />
          <div className=" text-white absolute top-[0%] right-[-100%] bg-black w-[100%] h-[100%] p-4 group-hover:right-[0%] duration-100">
            <h1 className="font-medium ">5.Todo list</h1>
            <p className="mt-2">
              This is the website i have developed in the beginning how map, filter and useState hooks etc. works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeWorks;

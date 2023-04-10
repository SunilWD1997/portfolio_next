import Heading from "./Heading";
import {AiOutlineGift} from 'react-icons/ai';
import {FiBookOpen} from 'react-icons/fi';
import {TbWorldWww} from 'react-icons/tb';
import {GoLocation} from 'react-icons/go';

const About = () => {
  return (
    <section className="mx-[5%] my-[72px]">
      <Heading title="About Me" />

      <div className="flex flex-col items-center md:flex-row md:justify-between  mt-[60px]">
        <img  className="w-[260px] h-[320px] shadow" src="/about.jpeg" alt="" /> 
        <div className="mt-[20px] md:max-w-[60%] ">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2"><AiOutlineGift className="text-orange-500"/> <span className="font-bold">Birthday</span> <span className="mx-[10px]">:</span> <span>12.05.1997</span></div>
            <div className="flex items-center gap-2"><FiBookOpen className="text-orange-500"/> <span className="font-bold">Study</span> <span className="ml-[32px] mr-[10px]">:</span> <span>Parala Maharaja Engg. College, Odisha</span></div>
            <div className="flex items-center gap-2"><TbWorldWww className="text-orange-500"/> <span className="font-bold">Website</span> <span className="ml-[15px] mr-[10px]">:</span> <span>www.nextsunil.netlify.app</span></div>
            <div className="flex items-center gap-2"><AiOutlineGift className="text-orange-500"/> <span className="font-bold">Interest</span> <span className="ml-[16px] mr-[10px]">:</span> <span>Reading, Coding</span></div>
            <div className="flex items-center gap-2"><GoLocation className="text-orange-500"/> <span className="font-bold">Location</span> <span className="mx-[10px]">:</span> <span>560034, Banglore</span></div>
            </div>
            <div>
              <h4 className="font-bold my-[18px] md:my-[30px]">I'm Sunil and Frontend Developer</h4>
              <p className=" mb-[25px] leading-[20px]">Hi My name is Sunil patra. I am a Web Developer, and i'am very passionate and dedicated to my work, few years experience as a proffesuional</p>
            <span className=" text-[15px] text-[white] px-[20px] py-[5px] font-bold bg-orange-600 rounded cursor-pointer hover:bg-orange-900">Hire Me</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;

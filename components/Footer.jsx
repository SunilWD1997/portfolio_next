import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section >
      <div className="text-black text-center  bg-[gold]">
        <h2 className="text-3xl py-3 ">Web Developer</h2>
        <p className=" max-w-[600px] mx-auto px-[5%]">
          I am a Web Developer, i do developement websites using different
          frameworks and libraries and I have kind of fast learner quality
          because i have some quriocity to explore new technolgis and idea's as
          well
        </p>
        <div className="flex justify-center gap-4 my-3">
          <div className=" border p-2 rounded-[50%] hover:bg-[grey] cursor-pointer">
            <FaFacebookF />
          </div>
          <div className=" border p-2 rounded-[50%] hover:bg-[grey] cursor-pointer">
            <MdEmail />
          </div>
          <div className=" border p-2 rounded-[50%] hover:bg-[grey] cursor-pointer">
            <FaGithub />
          </div>

          <div className=" border p-2 rounded-[50%] hover:bg-[grey] cursor-pointer">
            <FaLinkedin />
          </div>
        </div>
        <div className=" text-white bg-[black] flex justify-between px-[5%] py-2">
          <p>Copyright@2023 <span className="text-[grey]">Sunil Patra</span></p> 
            <p>Contact : +91-7873486717</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

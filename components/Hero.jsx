import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className=" pt-[60px] w-full relative">
      <img
        src="/hero.png"
        alt="remote_img"
        className="w-[100%] max-h-[600px] object-cover"
      />
      <div className="text-3xl text-[black] absolute top-[50%] left-[5%] translate-y-[-50%] ">
        <h1 className=" font-medium md:text-5xl">I'm Sunil Patra</h1>
        <h4 className=" text-[15px] mt-[0px] md:text-2xl md:mt-[12px]">
          <Typewriter
            options={{
              strings: ["Frontend Developer", "Backend Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>

        <div className=" border-[2px] border-orange-600 my-[12px]  md:my-[25px] w-[40px] md:w-[50px] rounded-[4px]"></div>
        <p className="max-w-[250px] md:max-w-[500px] text-[12px] md:text-[16px] leading-[15px] md:mb-[20px] md:leading-[22px]">
          In a proffesional content it often happens that private clients corder
          a publication to be made
        </p>

        <span className="text-[white] text-[12px] md:text-[16px] font-medium bg-orange-600 py-[4px] md:py-[6px] px-[18px] my-[15px] md:my-[30px] rounded-[4px] cursor-pointer hover:bg-orange-900">Learn More</span>
      </div>
    </div>
  );
};

export default Hero;

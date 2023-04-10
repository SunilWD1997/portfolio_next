import Heading from "./Heading";

const Skills = () => {

const mySkills = [
    {id: 1, name: 'JavaScripting', rating: 'w-[80%]'},
    {id: 2, name: 'React.js', rating: 'w-[90%]'},
    {id: 3, name: 'Next.js', rating: 'w-[80%]'},
    {id: 4, name: 'Node.js', rating: 'w-[60%]'},
    {id: 5, name: 'PHP', rating: 'w-[50%]'},
    {id: 6, name: 'Git/GitHub', rating: 'w-[80%]'},
]

  return (
    <section className="mx-[5%] my-[80px]">
      <Heading title="Skills" />

      <p className="my-[30px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ea
        ut, nam perspiciatis, repellat incidunt est ad aliquid velit similique
        numquam fugit eaque. Reprehenderit officiis similique dignissimos
        tempore unde quaerat illo et voluptatem praesentium?
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[30px] md:gap-x-[50px] gap-y-8 md:gap-y-10">


        {mySkills.map((skills)=>{

            return  (<div key={skills.id}>
            <h5>{skills.name}</h5>
            <div className="bg-[grey] h-[4px] mt-2 rounded flex items-center ">
              <div className={`bg-orange-400 h-[4px] ${skills.rating} rounded`}></div>
            </div>
          </div>)
        })}
       

      

     
         
        
      </div>
    </section>
  );
};

export default Skills;

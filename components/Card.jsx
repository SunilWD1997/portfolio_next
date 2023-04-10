



const Card = (props) => {
  return (
    <div className="text-[white] bg-orange-600 px-[30px] py-[20px]">
        <div className='text-[35px]'>{props.icon}</div>
       
    <h4 className="font-medium text-xl mb-[15px]">{props.heading}</h4>
    <p className="">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
      deserunt expedita nisi, provident assumenda numquam ab cupiditate
      molestiae accusantium vero nihil fugiat magnam totam odit at
      obcaecati enim. Veritatis tempore esse quod rem laborum officiis!
      Eum commodi praesentium eius neque iusto. Non impedit vel quaerat
      odio tempore aspernatur dolores dolorem!
    </p>
    
  </div>
  )
}

export default Card;
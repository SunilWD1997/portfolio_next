import Heading from "./Heading"

const ContactUs = () => {
  return (
    <section className="mx-[5%] my-[70px] ">
        <Heading title='Contact Us'/>

        <form action="https://formspree.io/f/xzbqkeza" method="POST" className=" mt-[40px]  flex flex-col items-center justify-center gap-4 md:gap-8">
            <div className="w-[100%] flex justify-between gap-4 md:gap-8">
                <input className="border rounded w-[50%] px-2 py-1" type="text"  name="name"  required placeholder="Name"/>
                <input className="border rounded w-[50%] px-2 py-1" type="email" name="email" required placeholder="Email"/>
            </div>
            <input className="w-[100%] px-2 py-1 border rounded" type="text"  name="subject" required  placeholder="Subject"/>
            <textarea className="w-[100%] px-2 py-1 border rounded"  name="textarea" required  cols="30" rows="7" placeholder="Message"></textarea>
            <button className="self-start bg-orange-600 px-3 py-[4px] font-medium text-[14px] text-white rounded cursor-pointer hover:bg-orange-900" type="submit">SEND MESSAGE</button>
        </form>
    </section>
  )
}

export default ContactUs
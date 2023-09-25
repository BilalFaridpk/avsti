import Image from "next/image"
import logo from '../app/logo.png'
import avsti from"../app/avsti.png"
import Link from "next/link"
import t1 from "./t1.jpg"

export default function Header()
{
    return(
  <div>
        <header className="flex justify-between items-center  p-4  bg-gray-300">
        <div className="">
         <Image src={logo} alt="logo" width={69} height={69}/>
        </div>
        <div className="flex justify-center gap-2 items-center pr-16">
          <Link href="#" className=" text-blue-700">About Us</Link>
          <Link href="#" className=" text-blue-700">Skills</Link>
          <Link href="#" className=" text-blue-700">Contact</Link>
          <button className="bg-red-500 rounded-2xl text-white p-2 hover:text-black">Donate Now</button>
        </div>      
      </header>
      <section className="flex flex-col items-center justify-center pt-12 gap-4">
         <h1 className="text-2xl font-bold">ALLIED VOCATIONAL SKILLS TRAINING INSTITUTE®</h1>
          <p>CENTRE FOR EMPOWERMENT AND DEVELOPMENT OF BOUNDED WOMEN</p>
        <button className="bg-blue-500 text-white rounded-2xl hover:text-black px-2 py-2 mt-6">About Avasti</button>
        <div className="py-4">
        <Image src={avsti} alt="pic" width={700} height={220}/>   
        </div>

        <div className="flex justify-center items-center gap-6 bg-gray-300 w-full p-16">
          <div>
            <p className="text-blue-600 text-2xl font-bold">Chief Executive Officer</p>
            <p className="text-3xl font-bold">Muhammad Jafar Bhatti</p>
            <button className="bg-blue-500 text-white rounded-2xl hover:text-black px-2 py-2 mt-4">Show Message</button>
          </div>
          <div className="flex pl-16">
            <Image src={t1} alt="pic" width={300} height={300} className="border-4 rounded-xl"/>
          </div>
        </div>
      </section>
         
   </div>     
         
  )
    
    }
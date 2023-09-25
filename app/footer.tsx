import Image from "next/image"
import logo from '../app/logo.png'
import avsti from"../app/avsti.png"
export default function Footer(){
    return(
<section> 
  <div className=" flex flex-col items-center text-center p-8 bg-gray-400 w-1/4  rounded-2xl " >    
    <div>
      <Image src={logo} alt="logo" width={100} height={100}/>
    </div> 
        <div>
            <p>Sewing and embroidery are two related but distinct skills that involve 
            working with fabric and thread to create various types of designs and garments.
            Sewing involves joining fabric pieces together using a needle and thread or a 
            sewing machine to create items such as clothing, bags, and accessories.
            Embroidery, on the other hand, involves decorating fabric with designs or 
            patterns using various types of stitches and threads</p>
          </div>
  </div>
</section>
  )
}

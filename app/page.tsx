'use client'

import { useGSAP } from "@gsap/react";
import Navbar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
import IconProvider from "@/components/IconProvider";
import gsap from "gsap";

export default function Home() {
 
  const socialLinks = [
    {id:1, element:<RiInstagramFill/> },
    {id:2, element:<FaFacebook/> },
    {id:4, element:<FaXTwitter/> },
    {id:5, element:<FaYoutube/> },
  ]

  useGSAP(()=>{
    gsap.from('.navbar', {y:-55})
    gsap.from('.description',{x:-155,opacity:0,duration:2})
  })

  return (
    <div className="h-screen w-full bg-black bg-no-repeat xl:bg-contain bg-center backgroundImage">
   <div className="navbar pt-6 pb-6 text-white hover:cursor-pointer">
    <Navbar/>
    </div>
    <div className="description text-white relative t-1/2 flex flex-col justify-center items-center max-w-full md:max-w-[450px] md:relative md:left-52 md:top-52 md:block ">
      <h1 className="text-lime-400 text-4xl md:text-9xl">LILA</h1>
      <h1 className="text-lime-400 text-4xl md:text-9xl">MODELS</h1>
      <p className="font-thin">LAGOS</p>
      <br />
      <br />
      <p className="p-3 md:p-0">We are a modelling agency, showcasing our self and brand to the world, we give this platform to women who are really passionate of been a model.</p>
      <br />
      <Button variant={'lime'} size={'lg'}>See Models</Button>
    </div>
    <div className="social-links box-border">
      <ul className="box-border bottom-0 max-w-full justify-around flex md:flex-col md:absolute md:right-0 md:pr-9 ">
        {socialLinks.map(item=>(
          <li key={item.id}  className="pt-6 pb-6">
           <IconProvider value="white">
           {item.element}
           </IconProvider>
           </li>
        ))}
        <li className="pt-6"><IconProvider value="white"><IoChatboxEllipses/></IconProvider></li>

      </ul>
    </div>
   </div>

  );
}

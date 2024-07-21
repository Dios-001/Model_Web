import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Menu } from "lucide-react"
import DropdownProvider from "./DropdownProvider"
export default function Navbar(){

    
    const navItems = [
        {id:1, text:"Home"},
        {id:2, text:"Models"},
        {id:3, text:"About"},
        {id:4, text:"Apply"},
        {id:5, text:"Contact"},
    ]
    return(
        <div className="flex flex-row md:justify-around justify-between items-center p-3 md:p-0">
            <header className="">
                <p className="text-3xl">LILA MODELS</p>
            </header>
            <nav className="md:w-1/2">
                <ul className="hidden md:flex justify-around">
                    {navItems.map(item=>(<li key={item.id}>{item.text}</li>))}
                </ul>
                <ul className="md:hidden flex ">
                    <DropdownProvider><Menu size={32}/></DropdownProvider>
                   
                </ul>
            </nav>
       
        </div>
    )
}
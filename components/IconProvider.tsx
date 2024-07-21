'use client'
import { IconContext } from "react-icons";




const IconProvider = ({children,value}:{children:React.ReactNode,value:string}) => {
  return (
    <IconContext.Provider value={{color:`${value}`,size:'42'}}>
        {children}
    </IconContext.Provider>
    
  )
}

export default IconProvider

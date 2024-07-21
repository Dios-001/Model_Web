import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const DropdownProvider = ({children}:{children:React.ReactNode}) => {
    const navItems = [
        {id:1, text:"Home"},
        {id:2, text:"Models"},
        {id:3, text:"About"},
        {id:4, text:"Apply"},
        {id:5, text:"Contact"},
    ]
  return (
   
    <DropdownMenu>
  <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
  <DropdownMenuContent>
    {navItems.map(item=>(
         <DropdownMenuItem key={item.id}>{item.text}</DropdownMenuItem>
    ))}
  
  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default DropdownProvider

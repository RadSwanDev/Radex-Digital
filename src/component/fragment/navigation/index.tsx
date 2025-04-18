"use client"
import Box from "@/component/atom/box";
import Button from "@/component/atom/button";
import CloseICon from "@/material/close-icon";
import HamburgerIcon from "@/material/menu-icon";
import React, { useState } from 'react'

export default function Navigation() {
  const [open,setOpen] = useState(false)
  
  const openNav = ()=>{
    if(open === false){
        setOpen(true)
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"    
        
    }else{
        setOpen(false)
        document.body.style.backgroundColor = "white"
      }
  }
  return (
    <>
        <Box id={"main"} sx={{position:"fixed",top:0,zIndex:30}} padding="p-4" width="w-full" height="auto" bgColor="bg-green-500" textColor="text-black">
          <Button background="bg-unset" textColor="text-white" bgHover="bg-blue-900" onSet={openNav}>{open ? <CloseICon/> :  <HamburgerIcon/>}</Button>
        </Box>
        {
            open ?
            <Box sx={{ position: "fixed", top: 100 }} padding="p-4 lef-0 transition-transform duration-3000 ease-in-out z-20" width="w-xl" bgColor="bg-gray-500" height="h-screen" textColor="text-black font-semibold" id={"main"}>
            {["about","services","clients","contacts"].map((item,index)=>{
                return(
                    <div key={index} className="hover:bg-gray-800 hover:cursor-pointer hover:text-white border-b-2 p-4 text-4xl">
                    <a href="">{item}</a>
                    </div>
                )
            })}
        </Box>
            : ""
        }
    </>
  )
}

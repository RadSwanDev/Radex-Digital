"use client"
import React, { ReactNode } from 'react'

export default function Button({onSet,children,background,bgHover,textColor}:{children : string | ReactNode,background : string, bgHover : string,textColor : string,onSet : ()=> void}) {
  return (
    <>
        <button className={`${background} p-4 ${textColor}  w-20 rounded border-4 font-bold hover:cursor-pointer hover:${bgHover} hover:shadow-2xl`} onClick={onSet}>{children}</button>
    </>
  )
}

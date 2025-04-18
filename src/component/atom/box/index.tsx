import React, { ReactNode } from 'react'

export default function Box({id,sx,children,bgColor,textColor,width,height,padding}:{width:string,height:string,padding:string,children : ReactNode,bgColor:string,sx:React.CSSProperties ,textColor:string,id:string}) {
  return (
    <div style={sx} id={id} className={`${padding} shadow-2xl rounded ${bgColor} ${textColor} ${width} ${height}`}>
        {children}
    </div>
  )
}

import React from 'react'

function Text({classname,text,color,spans,divClassname}) {
    
   const arr = [spans];
  return (
    <div className={`${divClassname}`}><span  className={`${classname} ${color}`}>{text}</span></div> 
  )
}

export default Text
import React from 'react'
import Text from '../Text.jsx'
const braces = ['{', '}', '[', ']', '(', ')'];
const Func = ({ val, brace }) => {
    return (<>
      <div className='flex '>
        <Text classname={`text-[#eeff31]`} text={val} />
        <Text classname={`text-[#eeff31]`} text={brace} />
      </div>
      <div className='text-white pl-4 flex'>
        <Text classname={`text-customPurple`} text={'return'} />
        <Text classname={`text-customPurple`} text={braces[2]} />
      </div>
  
  
  
    </>)
  }

  export default Func
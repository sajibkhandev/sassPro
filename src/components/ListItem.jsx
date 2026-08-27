import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const ListItem = ({text,type,className}) => {
  return (
    <li className={`text-base text-primary font-medium font-inter ${className}`}>{text}
    {
        type && <FaAngleDown className='inline ml-1'/>
    } 
    </li>
  )
}

export default ListItem
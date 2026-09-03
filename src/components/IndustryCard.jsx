import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex'
import { MdKeyboardArrowRight } from "react-icons/md";


const IndustryCard = ({src,title,text}) => {
  return (
    <div className='w-[366px] rounded-lg shadow-2xl'>
        <div className='w-[346px] h-[220px] mx-auto mt-2.5'>
          <Image className='w-full h-full' src={src}/>
        </div>
        <div className='p-[30px]'>
            <h4 className='text-[22px] text-fourth font-rel font-bold'>{title}</h4>
        <p className='text-base text-[#495E6C] font-roboto font-normal leading-[27px] pt-5 pb-6'>{text}</p>
        <a className='text-secondary text-base font-rel font-semibold' href="">See More <MdKeyboardArrowRight className='inline text-lg'/></a>
        </div>

    </div>
  )
}

export default IndustryCard
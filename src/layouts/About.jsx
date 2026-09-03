import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import AboutCard from '../components/AboutCard'
import Image from '../components/Image'
import IconOne from '../assets/abouticon1.png'
import { FaStar } from "react-icons/fa";


const About = () => {
    return (
        <section>
            <Container>
                <div className='bg-offwhite p-[50px] rounded-lg shadow-2xl mt-10'>
                    <Flex className='border-b border-[rgba(17,47,66,0.10)] pb-10 mb-6 justify-between '>
                        <div>
                            <h5 className='text-sm text-secondary font-rel font-bold pb-4'>Who we are?</h5>
                            <Heading className="leading-[48px] w-[759px]" text="More than 5,000 users around the world are already using STDEV actively" />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-y-2 w-[186px] h-[177px] bg-[#CFDDDB] rounded-md'>
                            <h2 className='text-[50px] text-fourth font-bold font-inter'>4.8</h2>
                            <ul className='flex gap-x-1'>
                                <li><FaStar className='text-[#FF7282] text-base' /></li>
                                <li><FaStar className='text-[#FF7282] text-base' /></li>
                                <li><FaStar className='text-[#FF7282] text-base' /></li>
                                <li><FaStar className='text-[#FF7282] text-base' /></li>
                                <li><FaStar className='text-[#FF7282] text-base' /></li>
                            </ul>
                            <p className='text-base text-[#495E6C] font-normal font-roboto'>35 Reviews</p>
                        </div>

                    </Flex>
                    <Flex className='justify-between'>
                        <AboutCard src={IconOne} title="22 Years" text="Year of experience"/>
                        <AboutCard src={IconOne} title="70+" text="Professionals"/>
                        <AboutCard src={IconOne} title="22 Years" text="Professionals"/>
                       
                    </Flex>
                </div>
            </Container>
        </section>
    )
}

export default About
import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'
import EngegeBanner from '../assets/engegeBanner.png'
const Engage = () => {
  return (
    <section className='pt-[110px] pb-[70px]'>
        <Container>
            <Flex className='items-center'>
                <div className='w-1/'>
                <Image src={EngegeBanner}/></div>
                <div className='w-1/2 ml-8'>

                <Heading className='pb-6' text="Don’t just engage, make it engaging."/>
                <SubHeading className="!text-[#495E6C] w-[530px]" text="Since 1999. For millions of users. We transform businesses with powerful and"/>
                <SubHeading className="!text-[#495E6C]" text="adaptable digital solutions."/>
                <SubHeading className="!text-[#495E6C] mt-3" text="Psum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra purus imperdiet a. Ut nisl est at ultricies neque ornare tellus tellus enim."/>
                <Button className='mt-11' text="Read More"/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Engage
import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import ProductBanner from '../assets/product.png'
import App from '../assets/appstore.png'
import Windows from '../assets/windows.png'

const Product = () => {
  return (
    <section className='bg-[#F3F3F3] pt-[113px] pb-[70px]'>
        <Container>
            <Heading className="mx-auto text-center w-[368px]" text="All product work with several devices."/>
            <SubHeading className="pt-7 pb-8 mx-auto text-center w-[456px] !text-[#495E6C]" text="A great SaaS UI/UX design can make your product addictive and uncomfortable to give up."/>
            <Flex className="justify-center gap-x-5 mb-14">
                <Image src={App}/>
                <Image src={Windows}/>
            </Flex>
            <Image src={ProductBanner}/>
        </Container>
    </section>
  )
}

export default Product
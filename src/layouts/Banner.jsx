import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'
import BannerImage from '../assets/banner.png'

const Banner = () => {
    return (
        <section className='bg-third pt-40 pb-[200px] relative'>
            <Container>
                <Flex>
                    <div className='w-1/2'>
                        <h5 className='text-lg text-offwhite font-bold font-rel'>Business & Technologies</h5>
                        <h2 className='leading-[61px] pt-3 pb-11 text-[52px] text-offwhite font-bold font-rel'>We help tech companies deliver great software</h2>
                        <SubHeading className='w-[536px]' text="Since 1999. For millions of users. We transform businesses with powerful and" />

                        <SubHeading text="adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow." />
                        <div className='w-[561px] relative mt-11'>

                            <input className='w-full p-4 rounded-md' type="text" />
                            <Button className="rounded-l-none absolute top-1/2 -translate-y-1/2 right-0 h-full px-6 py-3" text="Request for Demo"/>
                        </div>

                    </div>
                    <div className='w-1/2 absolute top-1/2 -translate-y-1/2 right-0'>
                        <Image src={BannerImage} alt="Banner aimge" />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Banner
import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import IndustryCard from '../components/IndustryCard'
import ImageOne from '../assets/industryImage.png'

const Industry = () => {
    return (
        <section className='pt-[113px] pb-[120px]'>
            <Container>
                <Heading className='text-center pb-14' text="Industries in focus" />
                <Flex className='justify-between flex-wrap gap-y-7'>
                    <IndustryCard src={ImageOne} title={`FinTech`} text={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`} />
                    <IndustryCard src={ImageOne} title={`FinTech`} text={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`} />
                    <IndustryCard src={ImageOne} title={`FinTech`} text={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`} />
                    <IndustryCard src={ImageOne} title={`FinTech`} text={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`} />
                    <IndustryCard src={ImageOne} title={`FinTech`} text={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`} />
                    <IndustryCard src={ImageOne} title={`FinTech`} text={`Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.`} />
                   


                </Flex>
            </Container>
        </section>
    )
}

export default Industry
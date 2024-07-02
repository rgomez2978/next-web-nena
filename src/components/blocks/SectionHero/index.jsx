import HeroComp from '@/components/shared/HeroComp/index'
import React from 'react'

const SectionHero = ({ data, type }) => {
  return (
    <>
      <HeroComp
        data={data}
        type={type} //multi - full
        speed={2000}
        autoplay={true}
        speedAutoplay={4000}
        arrows={false}
        dots={false}
        slides={1}
        cssClass=""
      />
    </>
  )
}

export default SectionHero
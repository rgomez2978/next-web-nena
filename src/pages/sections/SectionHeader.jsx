import HeaderComp from '@/components/HeaderComp'
import React from 'react'

const SectionHeader = ({
  data,
  type
}) => {
  return (
    <>
      <HeaderComp
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

export default SectionHeader
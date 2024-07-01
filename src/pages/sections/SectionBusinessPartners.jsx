/* eslint-disable @next/next/no-img-element */
import PartnersComp from '@/components/PartnersComp'
import TitleComp from '@/components/TitleComp'
import React from 'react'

const SectionBusinessPartners = ({
  title,
  titleType,
  description,
  data
}) => {

  console.log('SectionBusinessPartners', title, titleType, description, data)
  return (
    <div className='w-full h-full mt-0 lg:mt-5  xl:mt-14 mb-20 bg-transparent'>
      <TitleComp
        title={title}
        description={description}
        type={titleType}
      />

      {(data && data.length > 0) && (
        <PartnersComp
          data={data}
          cssClass=""
        />
      )}
    </div>
  )
}

export default SectionBusinessPartners
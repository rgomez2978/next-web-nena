import ProductComp from '@/components/shared/ProductComp'
import TitleComp from '@/components/shared/TitleComp'
import React from 'react'

const SectionProducsTop = ({
  titleType,
  title,
  description,
  data,
  type
}) => {
  return (
    <div className='w-full h-full mt-10 bg-transparent'>
      <TitleComp
        title={title}
        description={description}
        type={titleType}
      />

      {(data && data.length > 0) && (
        <ProductComp
          type={type}
          data={data}
          speed={1000}
          autoplay={true}
          speedAutoplay={3000}
          arrows={true}
          dots={false}
          slides={1}
          // cssClass="rounded-2xl w-full h-full md:h-[230px] lg:h-[300px] xl:h-[320px]"
          cssClass="rounded-2xl w-full h-full md:h-[220px] lg:h-[300px] xl:h-[320px]"
        />
      )}
    </div>
  )
}

export default SectionProducsTop
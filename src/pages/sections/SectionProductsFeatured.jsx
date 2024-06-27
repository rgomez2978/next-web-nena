import ProductComp from '@/components/ProductComp'
import TitleComp from '@/components/TitleComp'
import React from 'react'

const SectionProductsFeatured = ({
  titleType,
  title,
  description,
  data,
  type
}) => {
  return (
    <div className='w-full h-full mt-10 bg-nena-secondary py-10'>
      <TitleComp
        title={title}
        description={description}
        type={titleType}
      />

      {(data && data.length > 0) && (
        <ProductComp
          data={data}
          type={type}
          speed={1500}
          autoplay={true}
          speedAutoplay={3000}
          arrows={true}
          dots={false}
          slides={2}
          separator={`mx-5`}
          cssClass="rounded-xl w-auto h-[100px] md:h-[170px] lg:h-[200px] xl:h-[230px]"
        />
      )}
    </div>
  )
}

export default SectionProductsFeatured
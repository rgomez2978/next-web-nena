import { ProductComp, TitleComp } from '@/components/shared/index'

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
          slides={3}
          separator={`mx-3 md:mx-3 lg:mx-4`}
          cssClass="rounded-xl w-auto h-[170px] md:h-[170px] xl:h-[200px] px-4 md:px-0 "
        />
      )}
    </div>
  )
}

export default SectionProductsFeatured
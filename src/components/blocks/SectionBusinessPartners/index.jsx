/* eslint-disable @next/next/no-img-element */
import { PartnersComp, TitleComp } from '@/components/shared/index'

const SectionBusinessPartners = ({
  title,
  titleType,
  description,
  data
}) => {

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
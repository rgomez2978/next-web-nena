import { TitleComp } from '@/components/shared'
import React from 'react'

const SectionOurValues = ({ data, titleType, cssClass }) => {
  console.log('SectionOurValues', cssClass)

  if (data && data.length > 0) {
    const { title, description, items } = data[0]

    return (
      <section className={`${cssClass}  flex flex-col justify-center items-center ${titleType !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}   `}>
        <TitleComp
          title={title}
          type={titleType}
        />
        <div className={`${cssClass} flex justify-center items-center py-0 mt-0  ${titleType !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}space-x-8 `}>
          {items.map(({ id, title, description }) => (
            <div
              key={id}
              class={`flex flex-col items-center justify-center w-full lg:max-w-sm xl:max-w-md p-6 bg-transparent rounded-lg hover:cursor-pointer
                ${titleType !== 'dark'
                  ? 'text-white hover:text-nena-secondary'
                  : 'text-nena-secondary hover:text-white bg-transparent hover:bg-nena-secondary-dark '}
               space-x-8 `}>
              <h5 class={`mb-2 text-2xl font-bold tracking-tight  `}>
                {title}
              </h5>

              <p class={`font-normal text-base text-center`}>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default SectionOurValues
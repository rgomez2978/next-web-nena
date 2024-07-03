import { TitleComp } from '@/components/shared'

const SectionContentAbout = ({ data, titleType, cssClass }) => {

  if (data && data.length > 0) {
    const { title, description, items } = data[0]

    return (
      <section className={`${cssClass} flex flex-col justify-center items-center ${titleType !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}`}
      >
        <div className={`${cssClass}`}>
          <TitleComp
            title={title}
            type={titleType}
          />
          <p className={`flex w-full -mt-5 flex-row justify-center items-center px-10 md:px-10 xl:px-52 font-semibold ${titleType === 'dark' ? 'text-gray-500' : 'text-white'} text-normal  text-sm md:text-base text-center `}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </p>
        </div>

        <div className={`${cssClass} flex justify-center items-center py-8 mt-0 space-x-4 text-white ${titleType === 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}`}>

          {items.map(({ id, title, description }) => (
            <div
              key={id}
              class={`flex flex-col items-center justify-center max-w-lg p-6 rounded-lg  hover:bg-nena-secondary-dark  `}>
              <h5 class="mb-2 text-2xl font-bold tracking-tight ">
                {title}
              </h5>
              <p class="font-normal text-base text-center">
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </p>
            </div>
          ))}
        </div>
      </section>
    )

  }

}

export default SectionContentAbout
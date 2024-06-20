'use client';

import { useEffect, useState } from 'react'
import { searchBannerFetch, searchProductTopFetch, searchProductFeaturedFetch } from '@/services/servicesWeb'
import HeaderComp from "@/components/HeaderComp/HeaderComp";
import ProductComp from "@/components/ProductComp/index";
import TitleComp from '@/components/TitleComp';


export default function PageInicio() {
  const [loadImages, setLoadImages] = useState([])
  const [loadProductsTop, setLoadProductsTop] = useState([])
  const [loadProductsFeatured, setLoadProductsFeatured] = useState([])

  /**
   * Carga los datos de las imagenes asociadas al banner
   */
  const getBanners = async () => {
    const data = await searchBannerFetch()
    const filteredData = data.filter(item => item.status === true);
    filteredData && filteredData !== undefined
      ? setLoadImages(filteredData)
      : null;
  }

  /**
   * Carga los datos de las productos top
   */
  const getProductsTop = async () => {
    const data = await searchProductTopFetch()
    const filteredData = data.filter(item => item.status === true);
    filteredData && filteredData !== undefined
      ? setLoadProductsTop(filteredData)
      : null;
  }

  /**
   * Carga los datos de las productos destacados
   */
  const getProductsFeatured = async () => {
    const data = await searchProductFeaturedFetch()
    const filteredData = data.filter(item => item.status === true);
    filteredData && filteredData !== undefined
      ? setLoadProductsFeatured(filteredData)
      : null;
  }


  useEffect(() => {
    getBanners()
    getProductsTop()
    getProductsFeatured()
  }, [])



  console.log('loadProducts', loadProductsTop, loadProductsTop.length)

  return (
    <>
      <div className='flex flex-col items-start justify-center '>

        <div className='w-full h-full'>
          {(loadImages && loadImages.length > 0) && (
            <HeaderComp
              data={loadImages}
              type={loadImages && loadImages.length > 1 ? 'multi' : 'single'}
              speed={1500}
              autoplay={true}
              speedAutoplay={4000}
              arrows={true}
              dots={false}
              slides={1}
              cssClass="rounded-2xl w-[100%] h-[200px] sm:h-[200px] md:h-[300px] lg:h-[350px]"
            />
          )}
        </div>

        <div className='w-full h-full mt-10 bg-transparent'>
          <TitleComp
            title={'Productos Top'}
            description={''}
            type={'dark'}
          />
          {(loadProductsTop && loadProductsTop.length > 0) && (
            <ProductComp
              data={loadProductsTop}
              type='grid'
              speed={1000}
              autoplay={true}
              speedAutoplay={3000}
              arrows={true}
              dots={false}
              slides={1}
              cssClass="rounded-2xl w-full h-auto md:h-[230px] lg:h-[300px] xl:h-[320px]"
            />
          )}
        </div>

        <div className='w-full h-full mt-10 bg-nena-secondary py-10'>
          <TitleComp
            title={'Productos Destacados'}
            description={''}
            type={'ligth'}
          />
          {(loadProductsFeatured && loadProductsFeatured.length > 0) && (
            <ProductComp
              data={loadProductsFeatured}
              type='slide'
              model='top'
              speed={1000}
              autoplay={true}
              speedAutoplay={3000}
              arrows={true}
              dots={false}
              slides={loadProductsFeatured.length / 2}
              cssClass="rounded-2xl w-auto h-[100px] md:h-[170px] lg:h-[200px] xl:h-[230px]"
            />
          )}
        </div>

        <main className='container mx-auto w-[90%] md:w-[82%] border border-green-500  '>
          <div className='text-blue mt-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum!
          </div>
        </main>
      </div>

      {/* <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum placeat illo aut suscipit! Officia excepturi illo autem aperiam expedita. Tenetur quidem illum minus quod laborum, iusto labore itaque ratione!
        </div>
      </main> */}

      {/*
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus atque tempora commodi tempore quia excepturi quis harum quibusdam, consequuntur aut blanditiis dolore at rerum sit? Deleniti temporibus mollitia odit.
      </div> */}
    </>
  );
}

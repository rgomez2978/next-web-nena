import Image from "next/image";

const HeaderFullComp = ({ data }) => {

  const text = [
    {
      id: 1,
      title: 'Distribuimos salud y bienestar a toda venezuela',
      description: 'Siempre listos y preparados para hacer llegar tus pedidos.',
      url: '/images/banners/header/27.jpg',
    },
    {
      id: 2,
      title: 'Comprometidos contigo cada día!',
      description: 'Siempre listos y preparados para hacer llegar tus pedidos.',
      url: '/images/banners/header/IMG_8296.jpg',
    },
    {
      id: 3,
      title: 'Seguimos trabajando para surtir tu farmacia',
      description: '',
      url: '/images/banners/header/8.jpg',
    },
    {
      id: 4,
      title: 'Ahora más que nunca, codo a codo contigo!',
      description: '',
      url: '/images/banners/header/20230325_123737.jpg',
    },
    {
      id: 5,
      title: 'Aquí se distribuye compromiso y calidad',
      description: '',
      url: '/images/banners/header/20230224_084643.jpg',
    }
  ]

  const valueArray = 4;

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Image
        src={text[valueArray].url}
        alt="Background Image"
        className="object-cover object-center w-full h-full"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-nena-primary bg-opacity-70"></div>

      <div className="absolute flex flex-col items-center justify-center w-[60%] text-center">
        <h1
          data-aos="zoom-in"
          // data-aos-easing="linear"
          data-aos-duration="350"
          data-aos-anchor-placement="top-bottom"
          // data-aos-anchor="#example-anchor"
          // data-aos-offset="500"
          data-aos-easing="ease-in-out"
          className="text-5xl lg:text-5xl text-white font-bold">
          {text[valueArray].title}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
          className="text-2xl text-white mt-4">
          {/* {text[0].description} */}
        </p>
      </div>

      <button
        className="fixed justify-center bottom-10 p-6 text-white"
        onClick={() => window.scrollTo({
          top: 650,
          // top: document.body.scrollHeight,
          behavior: 'smooth'
        })}
      >
        <svg
          className="animate-[wiggle_1s_ease-in-out_infinite] h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
        >
          <path d="M12 2 H12 A7 7 0 0 1 19 9 V15 A7 7 0 0 1 12 22 H12 A7 7 0 0 1 5 15 V9 A7 7 0 0 1 12 2 z" />
          <path d="M12 6v4" />
        </svg>

        {/* <svg
          className="animate-bounce h-8 w-8"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M7 9H2c0-2.96 2.17-5.43 5-5.91V9m13-2h-2v6h-3l4 4 4-4h-3V7M9 3.09V9h5c0-2.96-2.17-5.43-5-5.91M2 15c0 3.3 2.7 6 6 6s6-2.7 6-6v-4H2v4z" />
        </svg> */}

      </button>

      {/*
      <button
        className="fixed bottom-10 right-10 p-6 bg-blue-600 text-white rounded-full"
        onClick={() => window.scrollTo({
          top: 650,
          // top: document.body.scrollHeight,
          behavior: 'smooth'
        })}
      >
        <i className={`pi pi-bars text-lg h-6 w-6`}></i>

      </button> */}
    </div>
  );
};

export default HeaderFullComp;
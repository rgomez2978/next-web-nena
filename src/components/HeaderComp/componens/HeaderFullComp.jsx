import Image from "next/image";

const HeaderFullComp = ({ data }) => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={data}
        alt="Background Image"
        className="object-cover object-center w-full h-full"
        layout="fill"
        objectFit="cover"
      />
      <Image
        src=""
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-nena-primary bg-opacity-70"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <h1 data-aos="fade-right" className="text-6xl text-white font-bold">Hello, World!</h1>
        <p data-aos="fade-up" className="text-2xl text-white mt-4">This is a text</p>
      </div>
    </div>
  );
};

export default HeaderFullComp;
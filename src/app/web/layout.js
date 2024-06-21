'use client'
import { useEffect } from 'react';
import { Inter } from "next/font/google";
import LayoutComp from "@/components/LayoutComp/index";
import HeaderComp from "@/components/HeaderComp/index";
import { PrimeReactProvider } from 'primereact/api';
import Provider from "@/components/provider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "primereact/resources/themes/saga-blue/theme.css";
import 'primeicons/primeicons.css';
import "../globals.css";


const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <PrimeReactProvider>
      <html >
        <body className={`${inter.className} h-full`} >
          <Provider>
            <main className="flex flex-col items-center justify-between w-full min-h-screen">
              <div className="w-full min-h-full">
                <LayoutComp type={'menu'} model={'full'} />
                <div className="mx-auto z-10 w-full">

                  <div className='w-full h-full'>
                    <HeaderComp
                      type={'full'} //multi - full
                      speed={1500}
                      autoplay={true}
                      speedAutoplay={4000}
                      arrows={true}
                      dots={false}
                      slides={1}
                      cssClass="w-[100%] h-[250px] lg:h-[500px] shadow-xl"
                    />
                  </div>

                  {children}
                </div>
              </div>
            </main>
          </Provider>
        </body>
      </html>
    </PrimeReactProvider>
  );
}

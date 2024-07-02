import localFont from 'next/font/local'
// import { Inter, Mulish } from "next/font/google";


// const mulish = Mulish({
//   subsets: ['latin'],
//   weight: ['400', '700']
// });



// const inter = Inter({ subsets: ["latin"] });


export const segoe = localFont({
  src: [
    {
      path: '../../public/fonts/light/latest.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/semilight/latest.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/normal/latest.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/bold/latest.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/semibold/latest.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: "--font-segoe",
})

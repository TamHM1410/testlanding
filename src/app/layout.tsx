import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/sections/footer/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Occo',
  description: 'MẠNG XÃ HỘI DÀNH CHO NGƯỜI VIỆT',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <link rel="icon" href="https://occo.ee/wp-content/uploads/2022/01/fb_img.png" />
      <body className={inter.className } style={{backgroundColor:"#040623",minHeight:'100vh'}}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}

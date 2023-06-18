'use client'
import Image from 'next/image'
import Aos from 'aos';
import { useEffect } from 'react';
import Navbar from '@/components/home/Navbar';
import Banner from '@/components/home/Banner';
import TopBrands from '@/components/home/TopBrands';
import Products from '@/components/home/Products';
import Zeteffect from '@/components/home/Zeteffect';
import WhyUs from '@/components/home/WhyUs';
import StartEarning from '@/components/home/StartEarning';
import Footer from '@/components/home/Footer';

export default function Home() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.js')
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
      <TopBrands />
      <Products />
      <Zeteffect />
      <WhyUs />
      <StartEarning />
      <Footer />
    </>
  )
}

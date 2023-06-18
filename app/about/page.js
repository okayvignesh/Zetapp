
'use client'
import { useEffect } from 'react';
import Aos from 'aos';
import Banner from '@/components/about/Banner'
import Bottom from '@/components/about/Bottom'
import Evolution from '@/components/about/Evolution'
import Featured from '@/components/about/Featured'
import Founders from '@/components/about/Founders'
import Investors from '@/components/about/Investors'
import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import React from 'react'


function page() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.js')
        Aos.init();
    }, []);
    return (
        <>
            <Navbar />
            <Banner />
            <Evolution />
            <Featured />
            <Investors />
            <Founders />
            <Bottom />
            <Footer />
        </>
    )
}

export default page

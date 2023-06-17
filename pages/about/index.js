import Banner from '@/components/about/Banner'
import Bottom from '@/components/about/Bottom'
import Evolution from '@/components/about/Evolution'
import Featured from '@/components/about/Featured'
import Founders from '@/components/about/Founders'
import Investors from '@/components/about/Investors'
import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import React from 'react'

function index() {
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

export default index

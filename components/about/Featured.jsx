import Link from 'next/link'
import React from 'react'
import img1 from '../../public/images/featured/1.webp'
import img2 from '../../public/images/featured/2.webp'
import img3 from '../../public/images/featured/3.webp'
import img4 from '../../public/images/featured/4.webp'
import img5 from '../../public/images/featured/5.webp'
import Image from 'next/image'

function Featured() {
    return (
        <section className='featured'>
            <div className="container">
                <h1>Got Featured</h1>
                <Link href="https://economictimes.indiatimes.com/tech/funding/onecode-has-raised-13-million-in-fresh-funding-led-by-general-catalyst/articleshow/90571172.cms" target='_blank'>
                    <Image src={img1} alt='image' width={220} height={148} className='featured-img' />
                </Link>
                <Link href="https://inc42.com/buzz/fintech-startup-onecode-raises-13mn-in-series-a-round-led-by-general-catalyst/" target='_blank'>
                    <Image src={img2} alt='image' width={220} height={148} className='featured-img' />
                </Link>
                <Link href="https://www.livemint.com/companies/start-ups/onecode-raises-5-million-led-by-sequoia-s-surge-and-nexus-venture-partners-11626329270757.html" target='_blank'>
                    <Image src={img3} alt='image' width={220} height={148} className='featured-img' />
                </Link>
                <Link href="https://yourstory.com/2022/03/funding-alert-onecode-series-a-general-catalyst-financial-services" target='_blank'>
                    <Image src={img4} alt='image' width={220} height={148} className='featured-img' />
                </Link>
                <Link href="https://www.business-standard.com/article/companies/onecode-raises-5-mn-led-by-sequoia-capital-s-surge-nexus-venture-partners-121071500470_1.html" target='_blank'>
                    <Image src={img5} alt='image' width={220} height={148} className='featured-img' />
                </Link>

            </div>
        </section>
    )
}

export default Featured

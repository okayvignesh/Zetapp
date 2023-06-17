import React from 'react'
import Image from 'next/image'
import img1 from '../../public/images/founders/1.webp'
import img2 from '../../public/images/founders/2.webp'
import img3 from '../../public/images/founders/3.webp'
import li from '../../public/images/icons/linkedin.webp'
import Link from 'next/link'

function Founders() {
    return (
        <section className='founders'>
            <div className="container">
                <h1 className='text-center'>Meet our Founders</h1>
                <h5 className='text-center text-muted'>Few words from founders desk</h5>
                <div data-aos="fade-up" className="row my-5">
                    <div className="founder-profile col-lg-4 col-sm-12 col-md-4">
                        <Image src={img1} alt='profile' width={300} height={300} className='founder-profile-img' />
                        <div className='d-flex align-items-center w-100 justify-content-around my-4'>
                            <div >
                                <p>Manish Shara</p>
                                <p>Co- Founder & CEO</p>
                            </div>
                            <Link href="/">
                                <Image src={li} alt='linkedin' width={40} height={40} />
                            </Link>
                        </div>
                    </div>
                    <div className="founder-profile col-lg-4 col-sm-12 col-md-4">
                        <Image src={img2} alt='profile' width={300} height={300} className='founder-profile-img' />
                        <div className='d-flex align-items-center w-100 justify-content-around my-4'>
                            <div >
                                <p>Yash Desai</p>
                                <p>Co- Founder</p>
                            </div>
                            <Link href="/">
                                <Image src={li} alt='linkedin' width={40} height={40} />
                            </Link>
                        </div>
                    </div>
                    <div className="founder-profile col-lg-4 col-sm-12 col-md-4">
                        <Image src={img3} alt='profile' width={300} height={300} className='founder-profile-img' />
                        <div className='d-flex align-items-center w-100 justify-content-around my-4'>
                            <div >
                                <p>Lokesh Agarwal</p>
                                <p>CTO</p>
                            </div>
                            <Link href="/">
                                <Image src={li} alt='linkedin' width={40} height={40} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Founders

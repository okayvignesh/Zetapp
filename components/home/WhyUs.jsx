import React from 'react'
import Image from 'next/image'
import img from '../../public/images/whyus.webp'
import bg from '../../public/images/stripebg.webp'
import img1 from '../../public/images/whyus/1.svg'
import img2 from '../../public/images/whyus/2.svg'
import img3 from '../../public/images/whyus/3.svg'
import img4 from '../../public/images/whyus/4.svg'
import img5 from '../../public/images/whyus/5.svg'
import img6 from '../../public/images/whyus/6.svg'

const points = [
    {
        heading: `Zero Investment`,
        content: `Build your business without any investment`,
        img: img1
    },
    {
        heading: `Quick Payout`,
        content: `Direct Payout in your bank account in short time`,
        img: img2
    },
    {
        heading: `Limitless Earnings`,
        content: `Direct Payout in your bank account in short time`,
        img: img3
    },
    {
        heading: `Training & Upskilling`,
        content: `Get trained by finance and sales experts`,
        img: img4
    },
    {
        heading: `Customer Support`,
        content: `Access tools and content to build relationship`,
        img: img5
    },
    {
        heading: `Financial Products`,
        content: `Trustworthy & high-rated products & categories`,
        img: img6
    },
]

function WhyUs() {
    return (
        <section className='whyus container'>
            <div  className="row px-5 whyus-flex">
                <div className="col-lg-3 col-sm-12 whyus-col">
                    <Image src={bg} alt='bg' className='stripe-bg' />
                    <h5>Why<span className='darktext'> Choose Us</span></h5>
                    <p>Why we are loved by our customers</p>
                    <Image src={img} alt='whyus-img' />
                </div>
                <div data-aos="fade-up" className="col-lg-9 col-sm-12">
                    <div className="row d-flex justify-content-center">

                        {
                            points.map((value, index) => {
                                return (
                                    <div className="col-lg-5 col-sm-12 col-md-4 whyus-points" key={index}>
                                        <Image src={value.img} width={90} alt='-' height={120} />
                                        <h6>{value.heading}</h6>
                                        <p>{value.content}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs

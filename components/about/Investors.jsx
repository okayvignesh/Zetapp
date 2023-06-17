import React from 'react'
import Image from 'next/image'
import img1 from '../../public/images/investors/1.webp'
import img2 from '../../public/images/investors/2.webp'
import img3 from '../../public/images/investors/3.webp'
import img4 from '../../public/images/investors/4.webp'
import per1 from '../../public/images/investors/person1.webp'
import per2 from '../../public/images/investors/person2.webp'
import per3 from '../../public/images/investors/person3.webp'
import per4 from '../../public/images/investors/person4.webp'
import per5 from '../../public/images/investors/person5.webp'
import per6 from '../../public/images/investors/person6.webp'
import per7 from '../../public/images/investors/person7.webp'
import per8 from '../../public/images/investors/person8.webp'

function Investors() {
    return (
        <section className='investors'>
            <h1>Meet the Investors</h1>
            <div data-aos="fade-up" className="d-flex justify-content-around investor-flex">
                <Image src={img1} className="investor-image" width={200} height={100} />
                <Image src={img2} className="investor-image" width={200} height={100} />
                <Image src={img3} className="investor-image" width={200} height={100} />
                <Image src={img4} className="investor-image" width={200} height={100} />
            </div>

            <div className="row d-flex justify-content-center">
                <div className="investor-profile col-lg-3 col-sm-6 col-md-3">
                    <Image src={per1} alt='-' width={200} height={175} />
                    <p className='m-0'>Kunal Shah</p>
                    <p className='text-muted'>Founder, CRED</p>
                </div>
                <div className="investor-profile col-lg-3 col-sm-6 col-md-3">
                    <Image src={per2} alt='-' width={200} height={175} />
                    <p className='m-0'>Gaurav Munjal</p>
                    <p className='text-muted'>Founder, UNACADEMY</p>
                </div>
                <div className="investor-profile col-lg-3 col-sm-6 col-md-3">
                    <Image src={per3} alt='-' width={200} height={175} />
                    <p className='m-0'>Aakrit Vaish</p>
                    <p className='text-muted'>Co-Founder, HAPTIK</p>
                </div>
                <div className="investor-profile col-lg-3 col-sm-6 col-md-3">
                    <Image src={per4} alt='-' width={200} height={175} />
                    <p className='m-0'>Harshil Mathur</p>
                    <p className='text-muted'>Founder, RAZORPAY</p>
                </div>
                <div className="investor-profile col-lg-3 col-sm-6 col-md-3">
                    <Image src={per5} alt='-' width={200} height={175} />
                    <p className='m-0'>Vidit Aatrey</p>
                    <p className='text-muted'>Founder & CEO, MEESHO</p>
                </div>
                <div className="investor-profile col-lg-3 col-sm-6 col-md-3">
                    <Image src={per6} alt='-' width={200} height={175} />
                    <p className='m-0'>Amrish Rau</p>
                    <p className='text-muted'>CEO, PINELABS</p>
                </div>
                <div className="investor-profile col-lg-3 col-sm-6 col-md-3">
                    <Image src={per7} alt='-' width={200} height={175} />
                    <p className='m-0'>Lalit Keshre</p>
                    <p className='text-muted'>CEO, GROWW</p>
                </div>
                <div className="investor-profile col-lg-3 col-sm-6 col-md-3">
                    <Image src={per8} alt='-' width={200} height={175} />
                    <p className='m-0'>Gokul Rajaram</p>
                    <p className='text-muted'>Product, DOORDASH</p>
                </div>
            </div>

        </section>
    )
}

export default Investors

import React from 'react'
import Image from 'next/image'
import stripe1 from '../../public/images/stripes.svg'
import stripe2 from '../../public/images/stripes2.svg'
import img1 from '../../public/images/products/1.webp'
import img2 from '../../public/images/products/2.webp'
import img3 from '../../public/images/products/3.webp'
import img4 from '../../public/images/products/4.webp'


function Products() {
    return (
        <section className='products'>
            <div className="container">
                <h4 className='text-center'>Products on ZET</h4>
                <p className='text-center'>We are trusted by best brand in the country</p>
                <Image src={stripe1} alt="stripes" className="stripe-left" />
                <Image src={stripe2} alt="stripes" className="stripe-right" />
                <div data-aos="fade-up" className="row my-5 product-flex">
                    <div className="col-lg-6 product-card one col-md-6">
                        <Image src={img1} alt="credit-card" width={150} height={150} className='product-card-img' />
                        <div className="col-lg-8 col-sm-10 col-md-8 ">
                            <h5 className='title'>
                                CREDIT CARDS
                            </h5>
                            <p>100% Contactless Application Process with Instant Approval From Top Banks.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 product-card two">
                        <Image src={img2} alt="credit-card" width={150} height={150} className='product-card-img' />
                        <div className="col-lg-8 col-sm-10 col-md-8">
                            <h5 className='title'>
                                LOANS
                            </h5>
                            <p>100% online process. Instant offers. Affordable Rate of Interest on loans.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 product-card three">
                        <Image src={img3} alt="credit-card" width={150} height={150} className='product-card-img' />
                        <div className="col-lg-8 col-sm-10 col-md-8">
                            <h5 className='title'>
                                BUY NOW PAY LATER
                            </h5>
                            <p>Short-term financing that allows consumers to make purchases and pay for them over time.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 product-card four">
                        <Image src={img4} alt="credit-card" width={150} height={150} className='product-card-img' />
                        <div className="col-lg-8 col-sm-10 col-md-8">
                            <h5 className='title'>
                                SAVING ACCOUNTS
                            </h5>
                            <p>ZET offers range of savings account that suits your personal needs for the banking.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products

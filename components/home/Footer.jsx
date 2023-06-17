import React from 'react'
import Image from 'next/image'
import img from '../../public/images/footer.webp'
import logo from '../../public/images/footerlogo.svg'
import email from '../../public/images/icons/email.webp'
import phone from '../../public/images/icons/phone.webp'
import li from '../../public/images/icons/linkedin.svg'
import ig from '../../public/images/icons/instagram.svg'
import fb from '../../public/images/icons/facebook.svg'
import tg from '../../public/images/icons/telegram.svg'
import wh from '../../public/images/icons/whatsapp.svg'
import Link from 'next/link'


function Footer() {
    return (
        <section className='footer'>
            <div className="container">
                <div className="footer-head">
                    <Image src={logo} width={100} height={50} alt='logo' />
                </div>
                <div className="row">
                    <div className="col-3 footer-col">
                        <h6>COMPANY</h6>
                        <Link href="/" className='footer-links'>About Us</Link>
                        <Link href="/" className='footer-links'>Partner with us</Link>
                        <Link href="/" className='footer-links'>Blog</Link>
                    </div>
                    <div className="col-3 footer-col">
                        <h6>LEGAL</h6>
                        <Link href="/" className='footer-links'>Privacy Policy</Link>
                        <Link href="/" className='footer-links'>Terms of Use</Link>
                    </div>
                    <div className="col-3 footer-col">
                        <h6>CONTACT</h6>
                        <Link href="/" className='footer-links'>
                            <Image src={email} alt='email' />
                            hi@zetapp.in
                        </Link>
                        <Link href="/" className='footer-links'>
                            <Image src={phone} alt='email' />
                            +91-7417274072
                        </Link>
                    </div>
                    <div className="col-3 footer-col">
                        <h6>SOCIAL</h6>
                        <div className='social'>
                            <Link href="/" className='social-links'>
                                <Image src={li} alt='linkedin' />
                            </Link>
                            <Link href="/" className='social-links'>
                                <Image src={ig} alt='linkedin' />
                            </Link>
                            <Link href="/" className='social-links'>
                                <Image src={fb} alt='linkedin' />
                            </Link>
                            <Link href="/" className='social-links'>
                                <Image src={tg} alt='linkedin' />
                            </Link>
                            <Link href="/" className='social-links'>
                                <Image src={wh} alt='linkedin' />
                            </Link>
                        </div>


                    </div>
                </div>

            </div>
            <Image src={img} alt='footer' className='footer-img' />
        </section>
    )
}

export default Footer

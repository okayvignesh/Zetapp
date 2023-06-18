import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/images/logo.svg'
import { usePathname } from 'next/navigation'

function Navbar() {
    const path = usePathname();


    const isActive = (pathname) => {
        return path === pathname ? 'active' : '';
    };

    return (
        <section className='global-navbar'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link href='/' className='navbar-brand'>
                        <Image src={logo} alt='logo' width={100} height={50} />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-links navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-links">
                            <Link href="/" className={`navbar-link ${isActive("/")}`}>
                                Home
                            </Link>
                            <Link href="/about" className={`navbar-link ${isActive("/about")}`}>
                                About Us
                            </Link>
                            <Link href="/partner" className="navbar-link">
                                Partner With Us
                            </Link>
                            <Link href="/blog" className="navbar-link">
                                Blog
                            </Link>
                            <button className='darkbtn'>
                                Download ZET
                            </button>
                        </div>

                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar

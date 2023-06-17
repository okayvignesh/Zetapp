import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/images/logo.svg'
import { useRouter } from 'next/router'

function Navbar() {
    const router = useRouter();

    const isActive = (pathname) => {
        return router.pathname === pathname ? 'active' : '';
    };

    return (
        <section className='global-navbar'>
            <nav className="navbar justify-content-between">
                <div className="container justify-content-between">
                    <Link href='/' className='navbar-brand'>
                        <Image src={logo} alt='logo' width={100} height={50} />
                    </Link>
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
            </nav>
        </section>
    )
}

export default Navbar

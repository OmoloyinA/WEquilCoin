import Link from 'next/link';
import styles from '../styles/local/components/navbar.module.css'
import { useRef } from 'react';
import ActiveLink from './activeLink';
import Image from 'next/image'



const Navbar = ({ handleClick, isClicked }, props) => {
    const safeDocument = typeof document !== 'undefined' ? document : {};
    const scrollBlocked = useRef();
    const html = safeDocument.documentElement;
    const { body } = safeDocument;

    // mobile navbar blockscroll
    const blockScroll = () => {
        if (!body || !body.style || scrollBlocked.current) return;

        const scrollBarWidth = window.innerWidth - html.clientWidth;
        const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;

        html.style.position = 'relative'; /* [1] */
        html.style.overflow = 'hidden'; /* [2] */
        body.style.position = 'relative'; /* [1] */
        body.style.overflow = 'hidden'; /* [2] */
        body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

        scrollBlocked.current = true;
    };
    // mobile navbar allow scroll
    const allowScroll = () => {
        if (!body || !body.style || !scrollBlocked.current) return;

        html.style.position = '';
        html.style.overflow = '';
        body.style.position = '';
        body.style.overflow = '';
        body.style.paddingRight = '';

        scrollBlocked.current = false;
    };

    isClicked ? blockScroll() : allowScroll();

    return (
        <header>
            <div className="m-0">
                <ul className={[styles.mobileNav, "list-unstyled"].join(" ")}>
                    <ul className="d-flex list-unstyled wrapper">
                        <li className=" d-flex list-unstyled w-100">
                            <Link href="/" >
                                <a className="d-flex">
                                    <Image src="/images/logo.png" alt="logo" className="logo my-auto" id="logo" width={40} height={28} />
                                </a>
                            </Link>
                        </li>
                        {/* hamburger button */}
                        <div className={isClicked ? "py-2 ml-auto" : "my-auto"} onClick={handleClick}>
                            <div className={isClicked ? [styles.hamburger, styles.hamburgerX].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")} ></div>
                            <div className={isClicked ? [styles.hamburger, styles.hamburgerX2].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")}></div>
                            <div className={isClicked ? [styles.hamburger, styles.ln3].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")} ></div>
                        </div>
                    </ul>
                    
                </ul>
                {/* mobile nav */}
                <nav className={isClicked ? styles.mobileNavWrapper : styles.hideMobileNav}>
                    <ul className={isClicked ? "d-flex list-unstyled m-0" : "d-none list-unstyled m-0"}>
                        <li onClick={handleClick}>
                            <Link href="/">
                                <a>
                                    <img src="images/home.svg" alt="home" width={32} height={20} className="mr-1" />Home
                                </a>
                            </Link>
                        </li>
                        <div></div>
                        <li onClick={handleClick}>
                            <Link href="#">
                                <a>
                                    <img src="images/about.svg" alt="About" width={32} height={20} className="mr-1" />About
                                </a>
                            </Link>
                        </li>
                        <div></div>
                        <li onClick={handleClick}>
                            <Link href="#team">
                                <a>
                                    <img src="images/whitepaper.svg" alt="whitepaper" width={32} height={20} className="mr-1" />WhitePaper
                                </a>

                            </Link>
                        </li>
                        <div></div>
                        <li onClick={handleClick}>
                            <button className={styles.uniswap}>
                                <a href="https://app.uniswap.org/#/swap" target="_newtab">BUY ON UNISWAP</a>
                            </button>
                        </li>
                    </ul>
                </nav>
                {/* desktop nav */}
                <div className={styles.desktopNav}>
                    <nav className={[styles.topNav, "wrapper"].join(" ")}>
                        <ul className="d-flex list-unstyled my-3">
                            <li className="m-0">
                                <Link href="/">
                                    <a>
                                        <Image src="/images/logo.png" alt="company logo" className="logo" width={60} height={48} />
                                    </a>
                                </Link>
                            </li>
                            <li className="my-auto ms-auto">
                                <ActiveLink href="/">
                                    Home
                                </ActiveLink>
                            </li>
                             <li className="my-auto">
                                <ActiveLink href="https://www.wequil.com/">
                                    About
                                </ActiveLink>
                            </li>
                            <li className="my-auto">
                                <Link href="#">
                                    <a>Whitepaper</a>
                                </Link>
                            </li>
                            <li className="my-auto">
                                <button className={styles.uniswap}>
                                    <a className="d-flex" href="https://app.uniswap.org/#/swap" target="_newtab">BUY ON UNISWAP</a>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
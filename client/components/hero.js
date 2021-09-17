import styles from '../styles/local/components/hero.module.css'
import {useEffect} from 'react';

const Hero = () => {
    // initializing wow.js animation
    const isServer = typeof window === 'undefined'
    const WOW = !isServer ? require('wow.js') : null

    useEffect(() => {
        new WOW().init()
    }, [])
    return ( 
        <section className={styles.heroWrapper}>
            <img src="images/mobile-hero.png" alt="hero" className={[styles.mobileHeroImg].join(" ")} />
            <img src="images/desktop-hero.png" alt="hero" className={styles.desktopHeroImg} />
            <div className={["text-left", styles.heroContent2].join(" ")}>
                <h1 className="">
                    <span> WEquil Coin</span><br/>
                    Exchanging Value Across Our
                    Decentralized Community
                </h1>
                <img src="images/wequil-group.png" alt="Wequil Group" className="" />
            </div>
            <img src="images/mobile-hero2.png" alt="hero" className={[styles.mobileHeroImg, styles.mobileHeroImg1].join(" ")} />
            <img src="images/desktop-hero2.png" alt="hero" className={styles.desktopHeroImg} />
            <div className={["d-flex flex-column  text-left wrapper", styles.heroContent].join(" ")}>
                <h1 className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0s">WEquil coin is now live on Uniswap!!</h1>
                <button className={styles.heroButton}><a href="https://app.uniswap.org/#/swap" target="_newtab">Buy Now</a></button>
            </div>
        </section>
    );
}
 
export default Hero;
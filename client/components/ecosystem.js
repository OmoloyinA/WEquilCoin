import styles from '../styles/local/components/ecosystem.module.css'
import { useEffect } from 'react'

const Ecosystem = () => {
    // initializing wow.js animation
    const isServer = typeof window === 'undefined'
    const WOW = !isServer ? require('wow.js') : null

   useEffect(()=> {
       new WOW().init()
   }, [])
    return ( 
        <section className="wrapper" >
            <div className={styles.sectionContainer}>
                <div className="wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0s">
                    <h2 className="sub-heading">WEquil coin! Our favour token used in all WEquil platforms</h2>
                    <h2 className="sub-heading">Don't miss the chance to be part of the early birds</h2>
                </div>
                <div className="wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0s">
                    <img src="images/ecosystem.png" alt="WEquil ecosystem" className={styles.ecosystem} />
                </div>
            </div>
        </section>
    );
}
 
export default Ecosystem;
import styles from '../styles/local/components/platform.module.css'

const Platform = () => {
    return ( 
        <section className={styles.sectionContainer}>
            <div className="wrapper">
                <main className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src="images/community.png" alt="community" />
                        <h2>Community</h2>
                        <p className="paragraph">
                            WEquil Group is a community of creators with shared principles. 
                            Children through adults across the world create projects of value to 
                            themselves and each other.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img src="images/platform.png" alt="platform" />
                        <h2>Platform</h2>
                        <p className="paragraph">
                            Our community is moving to <span><a href="">WEquil.App</a></span>,
                            a platform technology built with Google Software that we are linking to the
                            Ethereum Blockchain through WEquilCoin.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <img src="images/value.png" alt="value creation" />
                        <h2>Value Creation</h2>
                        <p className="paragraph">
                            WEquilCoin makes collaboration across our <span><a href="">WEquil school</a></span>,
                            <span> <a href="">WEquil capital</a></span> and <span><a href="">WEquil startup</a></span> incubator by allowing everyone
                            to track favors and collaboration efforts across our community.
                        </p>
                    </div>
                </main>
            </div>
        </section>
    );
}
 
export default Platform;
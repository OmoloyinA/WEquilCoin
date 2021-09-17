import styles from '../styles/local/components/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav className={["wrapper d-flex", styles.footerContent].join(" ")}>
                <ul className={["list-unstyled"].join(" ")}>
                    <li>
                        <h1>Services</h1>
                    </li>
                    <li>
                        <a href="https://www.wequil.com/webapp" target="_newtab">About WEquil</a>
                    </li>
                    <li>
                        <a href="https://www.wequil.school/" target="_newtab">School</a>
                    </li>
                    <li>
                        <a href="https://www.wequil.com/evolutionomics" target="_newtab">Capital</a>
                    </li>
                </ul>
                <ul className={["list-unstyled",].join(" ")}>
                    <li>
                        <h1>Blogs</h1>
                    </li>
                </ul>
                <ul className={["list-unstyled",].join(" ")}>
                    <li>
                        <h1>Startups</h1>
                    </li>
                    <li>
                        <a href="">Up</a>
                    </li>
                    <li>
                        <a href="">Blend & Mix</a>
                    </li> 
                </ul>
                <ul className={["list-unstyled",].join(" ")}>
                    <li>
                        <h1>Follow Us</h1>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/josephmcphail/" target="_newtab">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/WEquil/" target="_newtab1">Facebook</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/wequilgroup" target="_newtab2">Twitter</a>
                    </li>
                </ul>
                <span>
                    &copy; 2021 by WEquil <span>All Rights Reserved</span>
                </span>
            </nav>
        </footer>
    );
}

export default Footer;
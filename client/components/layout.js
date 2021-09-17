import Footer from "./footer";
import Navbar from "./navbar";
import { useState } from "react";

const Layout = ({ children }) => {
    const [isClicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!isClicked);
    }
    return (
        <div className="content">
            <Navbar
                handleClick={handleClick}
                isClicked={isClicked}
            />
            {children}
            <Footer />
        </div>

    );
}

export default Layout;
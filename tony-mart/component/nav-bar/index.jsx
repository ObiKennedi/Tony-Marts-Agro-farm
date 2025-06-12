import { navLinks } from "../../lib";
import { useEffect, useState } from "react"
import clsx from "clsx";
import "./index.scss"

function NavBar() {
    const [headerWidth, setHeaderWidth] = useState(window.innerWidth);
    const [headerClass, setHeaderClass] = useState('header-class')
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setHeaderWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 800) {
            setHeaderClass('header-small-class')
        } else {
            setHeaderClass('header-class')
        }
    }, [headerWidth])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    const menuClass = isMenuVisible ? 'toggle--visible' : 'toggle--not--visible';
    return (
        <header className={clsx(headerClass, scrolled ? "scrolled-header" : "unscrolled-header")}>
            <img src="/images/logo.png" alt="background" />
            <button onClick={toggleMenu}>
                <img src={scrolled? "/images/menu-black.png" : "/images/menu-white.png"} alt="menu"/>
            </button>
            <nav className={menuClass}>
                <ul>
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
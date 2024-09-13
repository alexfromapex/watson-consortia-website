"use client";
import "./nav.css";

import {
    useEffect,
    useState,
} from "react";
import { usePathname } from "next/navigation";

import Link from 'next/link';

const Nav = () => {

    const path = usePathname();

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");

        /* Background on scroll */
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    

    }, []);

    return (
        <nav className={`navbar navbar-expand-lg py-3 fixed-top fade-in-top navbar-dark ${scrollPosition > 100 || path !== '/' ? 'nav-scroll-bg' : ''}`}>
        <div className="container-fluid">
            <Link href="/">
                <img className="navbar-logo" src="/assets/logo.svg" alt="Watson Consortia" />
            </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link ps-5" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown dropdown-menu-dark has-megamenu">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Services
                    </a>
                    <div className="dropdown-menu dropdown-menu-dark ps-2 pe-5 megamenu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" href="/big-data">Big Data</Link>
                        <Link className="dropdown-item" href="/software">Software Engineering</Link>
                        <Link className="dropdown-item" href="/ai-ml">AI &amp; Machine Learning</Link>
                            {/* <Link className="dropdown-item nav-link" href="/cinema-vfx">Cinema &amp; VFX</Link>
                            <Link className="dropdown-item nav-link" href="/construction">Construction &amp; Contracting</Link> */}
                    </div>
                </li>
                <li className="nav-item dropdown dropdown-menu-dark d-none">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Industries
                    </a>
                    <div className="dropdown-menu dropdown-menu-dark ps-2 pe-5" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" href="/3d-modeling">3D Printing &amp; Modeling</Link>
                        <Link className="dropdown-item" href="/ai-ml">Construction</Link>
                        <Link className="dropdown-item" href="/big-data">Healthcare</Link>
                        <Link className="dropdown-item" href="/software">Finance</Link>
                        <Link className="dropdown-item" href="/ai-ml">Life Sciences</Link>
                            {/* <Link className="dropdown-item nav-link" href="/cinema-vfx">Cinema &amp; VFX</Link>
                            <Link className="dropdown-item nav-link" href="/construction">Construction &amp; Contracting</Link> */}
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact-us">Contact Us</a>
                </li>

            </ul>
        </div>
        </div>
        </nav>
    );
};

export default Nav;
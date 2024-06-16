"use client";
import "./nav.css";
import {useEffect} from "react";
import Link from 'next/link';

const Nav = () => {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <nav className="navbar navbar-expand-lg py-3">
        <div className="container-fluid">
            <Link href="/">
            <img className="navbar-logo" src="./assets/logo.svg" alt="Watson Consortia" />
            </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link ps-5" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Services
                    </a>
                    <div className="dropdown-menu ps-2 pe-5" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item nav-link" href="/software-data">Software &amp; Data</Link>
                        <Link className="dropdown-item nav-link" href="/cinema-vfx">Cinema &amp; VFX</Link>
                        <Link className="dropdown-item nav-link" href="/construction">Construction &amp; Contracting</Link>
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
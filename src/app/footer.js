"use client";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link href="/" className="nav-link px-2">Home</Link></li>
          <li className="nav-item"><Link href="/software-data" className="nav-link px-2">Software</Link></li>
          <li className="nav-item"><Link href="/cinema-vfx" className="nav-link px-2">Cinema</Link></li>
          <li className="nav-item"><Link href="/construction" className="nav-link px-2">Construction</Link></li>
          <li className="nav-item"><Link href="#" className="nav-link px-2">Contact Us</Link></li>
        </ul>
        <p className="text-center text-body-secondary">&copy; 2024 Watson Consortia, LLC</p>
      </footer>
    )
};

export default Footer;
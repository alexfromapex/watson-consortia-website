"use client";
import "./footer.css";
import Link from 'next/link';

const Footer = () => {
    return (
      <>
        <footer className="row pt-0 pb-0 mt-4">
          <div className="footer align-items-center">
            <div className="container">
              <div className="row p-5 justify-content-center">
                <div className="col-xl-3">
                <ul className="nav flex-column">
                    <li className="nav-item"><h5>Links</h5></li>
                    <li className="nav-item"><Link href="/" className="nav-link px-0">Home</Link></li>
                    <li className="nav-item"><Link href="/privacy-policy" className="nav-link px-0">Privacy Policy</Link></li>
                  </ul>
                </div>
                <div className="col-xl-3">
                  <ul className="nav flex-column">
                    <li className="nav-item"><h5>Services</h5></li>
                    <li className="nav-item"><Link className="nav-link px-0" href="/big-data">Big Data</Link></li>
                    <li className="nav-item"><Link className="nav-link px-0" href="/software">Software Engineering</Link></li>
                    <li className="nav-item"><Link className="nav-link px-0" href="/ai-ml">AI &amp; Machine Learning</Link></li>
                    {/* <li className="nav-item"><Link href="/cinema-vfx" className="nav-link px-2">Cinema</Link></li>
                    <li className="nav-item"><Link href="/construction" className="nav-link px-2">Construction</Link></li> */}
                  </ul>
                </div>
                <div className="col-xl-3">
                  <ul className="nav flex-column">
                    <li className="nav-item"><h5>Company</h5></li>
                    <li className="nav-item"><Link href="/contact-us" className="nav-link px-0">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row coda">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-2">
                  <div className="row">
                    <p className="text-center my-5">&copy; 2024 Watson Consortia, LLC. All rights reserved.</p>
                  </div>
                  <div className="row justify-content-center mb-5">
                    <img className="footer-logo" src="./assets/logo.svg" alt="Watson Consortia" />
                  </div>
                </div>
                </div>
              </div>
            </div>
            
      </footer>
      </>
    )
};

export default Footer;
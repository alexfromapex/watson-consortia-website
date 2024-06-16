import { Inter } from "next/font/google";
import "./theme.scss";
import "./globals.css";
import Nav from "./nav";
import Footer from "./footer";
import CookieBanner from "./cookie_banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/assets/square-logo-color.svg",
  },
  title: {
    template: "Watson Consortia - %s",
    default: "Watson Consortia Consulting"
  },
  description: "Professional consulting services in software engineering, machine learning, artificial intelligence, deep learning, and data engineering.",
  keywords: "Python, machine learning, AI, artificial intelligence, data science, PyTorch, Tensorflow, consulting, MLFlow, OpenCV"
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" data-bs-theme="dark">
      <body className={`${inter.className} body`}>
        <Nav />
        {children}
        <CookieBanner />
        <div className="container">
          <Footer />
        </div>
      </body>
    </html>
  );
}

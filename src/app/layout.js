// app/layout.js
import { Inter } from "next/font/google";
import "./theme.scss";
import "./globals.css";
import App from "./home";
import PageFade from "./components/page-fade";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/assets/square-logo-color.svg",
  },
  title: {
    template: "Watson Consortia - %s",
    default: "Watson Consortia Consulting",
  },
  description:
    "Professional consulting services in software engineering, machine learning, artificial intelligence, deep learning, and data engineering.",
  keywords:
    "Python, machine learning, AI, artificial intelligence, data science, PyTorch, Tensorflow, consulting, MLFlow, OpenCV",
};

export default function RootLayout({ children }) {
  return (
    <App inter={inter}>          {/* ← note the JSX prop syntax */}
      <PageFade>{children}</PageFade>   {/* ← wrap children */}
    </App>
  );
}
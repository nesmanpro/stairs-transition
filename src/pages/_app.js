import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { NavBar } from "@/components/navBar/NavBar.jsx";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="main">
      <NavBar />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />;
      </AnimatePresence>
    </div>
  )
}

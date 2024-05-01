'use client'
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import { motion } from 'framer-motion';
import Stairs from "@/components/stairs";
// import { NavBar } from "@/components/navBar/NavBar.jsx";


export default function About() {
    return (
        <Stairs className={`${styles.main} ${inter.className}`}>
            {/* <NavBar /> */}
            <motion.h1
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                className={styles.title}>About</motion.h1>
            <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur elit.  Ea adipisicing  incidunt  magnam quod doloribus maxime omnis placeat vitae,vero aperiam numquam facilis recusandae laboriosam aut? Libero asperiores nulla labore <span className={styles.span}>minima maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit.  </span>Ea incidunt magnam quod doloribus maxime omnis placeat vitae, vero aperiam numquam facilis recusandae laboriosam aut? Libero asperiores nulla labore minima maxime.</motion.p>
        </Stairs>
    )
}

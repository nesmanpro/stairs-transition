'use client'
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
const inter = Inter({ subsets: ["latin"] });
import { motion } from 'framer-motion';
import Stairs from "@/components/stairs";


export default function Contact() {

    return (
        <Stairs className={`${styles.main} ${inter.className}`}>

            <motion.h1
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                className={styles.title}>

                Contact

            </motion.h1>

            <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur elit.  Ea adipisicing  incidunt  magnam quod doloribus maxime omnis placeat vitae,vero aperiam numquam facilis recusandae laboriosam aut? Libero asperiores nulla labore minima maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ea incidunt magnam quod doloribus maxime omnis placeat vitae, vero aperiam nu<span className={styles.span}>mquam facilis recusandae laboriosam aut? Libero asperiores nulla</span> labore minima maxime.
            </motion.p>

        </Stairs>
    )
}

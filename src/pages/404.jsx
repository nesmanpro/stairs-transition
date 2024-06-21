'use client'
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
const inter = Inter({ subsets: ["latin"] });
import { motion } from 'framer-motion';
import Stairs from "@/components/stairs";



export default function notFound() {

    return (

        <Stairs className={`${styles.main} ${inter.className}`}>

            <motion.h1
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                className={styles.e404}>

                404

            </motion.h1>

            <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                className={styles.para404}>
                Error! <span className={styles.span}> Page not found </span>
            </motion.p>

        </Stairs>
    )
}

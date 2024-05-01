'use client'
import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import Stairs from "@/components/stairs";
// import { NavBar } from "@/components/navBar/NavBar.jsx";


export default function Home() {


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="nesmanpro portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs className={`${styles.main} ${inter.className}`}>
        {/* <NavBar /> */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          className={styles.title}>Home</motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur elit. <span className={styles.span}> Ea adipisicing  incidunt  magnam quod doloribus maxime omnis placeat vitae,vero aperiam numquam facilis recusandae laboriosam aut?</span> Libero asperiores nulla labore minima maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ea incidunt magnam quod doloribus maxime omnis placeat vitae, vero aperiam numquam facilis recusandae laboriosam aut? Libero asperiores nulla labore minima maxime.</motion.p>
      </Stairs>
    </>
  );
}

'use client'
import useMaskPosition from "@/utils/useMaskPosition";
import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "@/styles/Home.module.scss";
import { motion } from "framer-motion";
import Stairs from "@/components/stairs";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logoW.svg"



export default function Home() {

  const { x, y } = useMaskPosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;



  return (
    <>
      <Head>

        <title>Motion Transitions</title>
        <meta name="description" content="nesmanpro portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Stairs className={`${styles.mainHover} ${inter.className}`}>

        <motion.div
          className={styles.mask}
          // style={{
          //   WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          // }}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className={styles.header}>

            <Link href="/">
              <Image className={styles.logo} src={logo} />
            </Link>

            <div className={styles.nav}>
              <Link className={styles.navLink} href="/">Home</Link>
              <Link className={styles.navLink} href='/about'>About</Link>
              <Link className={styles.navLink} href='/contact'>Contact</Link>
            </div>

          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className={styles.title}>

            Welcome

          </motion.h1>

          <motion.p
            onMouseOver={() => { setIsHovered(true) }}
            onMouseLeave={() => { setIsHovered(false) }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className={styles.paragraph}>
            Esto es solo una muestra de <span className={styles.span}> las skills y conocimientos de front end que poseo, y el trabajo que puedo desarrollar</span>. En esta pagina encontraras parte de los recursos realizados con Framer Motion y NextJS en ReactJS, usando hojas de estilos SCSS.
          </motion.p>
        </motion.div>
        <div className={styles.body}>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className={styles.title}>

            Home

          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur elit. <span className={styles.span}> Ea adipisicing  incidunt  magnam quod doloribus maxime omnis placeat vitae,vero aperiam numquam facilis recusandae laboriosam aut?</span> Libero asperiores nulla labore minima maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ea incidunt magnam quod doloribus maxime omnis placeat vitae.
          </motion.p>
        </div>

      </Stairs>
    </>
  );
}

import React from 'react';
import Image from 'next/image';
import style from '@/components/navBar/navBar.module.scss';
import Link from 'next/link';
import logo from '../../../public/logo.svg';
import { motion } from 'framer-motion';

export const NavBar = () => {
    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className={style.header}>

            <Link href="/">
                <Image className={style.logo} src={logo} />
            </Link>

            <div className={style.nav}>
                <Link className={style.navLink} href="/">Home</Link>
                <Link className={style.navLink} href='/about'>About</Link>
                <Link className={style.navLink} href='/contact'>Contact</Link>
            </div>

        </motion.div>
    )
}

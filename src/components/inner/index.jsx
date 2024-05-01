import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { motion } from 'framer-motion';
import sass from '@/components/inner/style.module.scss'


export default function Inner({ children }) {

    const anim = (variants) => {
        return {
            initial: 'initial',
            animate: 'enter',
            exit: 'exit',
            variants

        }
    }

    const opacity = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        exit: {
            opacity: 1
        }
    }

    const slide = {
        initial: {
            top: '100vh'
        },
        enter: {
            top: '100vh'
        },
        exit: {
            top: '0',
            transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }

    const perspective = {
        initial: {
            y: 0,
            scale: 1
        },
        enter: {
            y: 0,
            scale: 1
        },
        exit: {
            y: -100,
            scale: 0.9,
            opacity: 0.6,
            transition: {
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }

    return (
        <div className={sass.inner}>
            <motion.div {...anim(slide)} className={sass.slides}></motion.div>
            <motion.div {...anim(perspective)} className={`${styles.main} ${inter.className}`}>
                <motion.div {...anim(opacity)}>
                    {children}
                </motion.div>
            </motion.div>
        </div>
    )
}

import sass from '@/components/stairs/style.module.scss'
import styles from '@/styles/Home.module.scss';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { motion } from 'framer-motion';


export default function Stairs({ children }) {

    const anim = (variants, custom = null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    const nbOfColumns = 5;

    const expand = {
        initial: {
            top: 0
        },
        enter: (i) => ({
            top: "100vh",
            transition: {
                duration: 0.4,
                delay: 0.05 * i,
                ease: [0.215, 0.61, 0.355, 1],
            },
            transitionEnd: { height: "0", top: "0" }
        }),

        exit: (i) => ({
            height: "100vh",
            transition: {
                duration: 0.4,
                delay: 0.05 * i,
                ease: [0.215, 0.61, 0.355, 1]
            }
        })
    };

    const overlay = {
        initial: {
            opacity: 0.5
        },
        enter: {
            opacity: 0
        },
        exit: {
            opacity: 0.5
        }
    }



    return (

        <div className={`${styles.main} ${inter.className} ${sass.stairs}`}>
            <motion.div {...anim(overlay)} className={sass.bg}></motion.div>
            <div className={sass.transitContainer}>
                {
                    [...Array(nbOfColumns)].map((_, i) => {
                        return <motion.div {...anim(expand, nbOfColumns - i)} key={i} />
                    })
                }

            </div>
            {children}
        </div>

    )
}

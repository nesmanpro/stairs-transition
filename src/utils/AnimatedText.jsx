import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({
    text,
    el: Wrapper = 'p',
    className,
}) => {
    const Element = Wrapper;
    return (
        <Element className={className}>
            {/* <span className="sr-only">
                {text}
            </span> */}
            <span aria-hidden="true">
                {text.split('').map((char, index) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.01,
                            delay: index / 10,
                        }}
                        key={index}
                    >{char}</motion.span>
                ))}
            </span>
        </Element>
    );
};

export default AnimatedText;

import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Main() {
    return (
        <div className="wrapper">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5, duration: 1 }}
            className="inner-wrapper">
            <h2>"Where Spotless Cleaning Comes to Your Door."</h2>
            <h3>Reach out for a free quote!.</h3>
        </motion.div>
        <motion.div className="steps"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        >
            <motion.div
    
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.7 }}
                className="step1">
                <div className="numbered-step-num"> 1 </div>
                <div className="numbered-step-txt">
                    <p>Sign Up</p>
                </div>
            </motion.div>
            <motion.div
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.7 }}
                className="step2">
                <div className="numbered-step-num"> 2 </div>
                <div className="numbered-step-txt">
                    <p>Reach out for quote scheduling</p>
                </div>
            </motion.div>
            <motion.div
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.7 }}
                className="step3">
                <div className="numbered-step-num"> 3 </div>
                <div className="numbered-step-txt">
                    <p>Get your house cleaned by one of our professionals</p>
                </div>
            </motion.div>
        </motion.div>
        <motion.div className="link-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 , duration: 1 }}
        >
            <Link className="hover-underline-animation" to="/Schedule">
                <p className="link"> Click here to get started!  </p>
            </Link>
        </motion.div>
    </div>
    )
}
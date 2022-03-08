import React from "react";
import { motion } from 'framer-motion';
import Builder from '../components/Builder';
     
const Schedule = () => {
    return(
        
    <main>
    <motion.div className="Schedule-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}>
      <p className="header">"Schedule Appointment"</p>
    </motion.div>
    <Builder/>
  </main>
);

}
export default Schedule;
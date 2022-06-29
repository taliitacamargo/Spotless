import React from "react";
import { motion } from 'framer-motion';

     
const Schedule = () => {
    return(
        
    <main>
    <motion.div className="Schedule-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}>
      <p className="header">"Schedule Appointment 1"</p>
      <p className = "calendar"></p>
    </motion.div>
  </main>
);

}
export default Schedule;
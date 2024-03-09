import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {

  const [open, setOpen] = useState(false);

  const variants = {
    visible: {opacity:1},
    hidden: {opacity:0}
  }

  const items = [
    "item1", "item2", "item3", "item4"
  ]

  return (
    <div className="course">
      <motion.ul>
        {items.map((item) =>(
          <motion.li key={items}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;

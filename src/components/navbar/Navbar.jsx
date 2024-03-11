import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100011775780828" target="_blank">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/s_sattu_s/" target="_blank">
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/satyam-singh-068730220/" target="_blank">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://www.upwork.com/freelancers/~0140b941ccaa0e490d" target="_blank">
            <img src="/upwork.png" alt="upwork" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

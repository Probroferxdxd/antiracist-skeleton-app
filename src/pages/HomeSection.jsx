import backgroundVideo from "../assets/backgroundVideo1.mp4";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <div className="page-container">
      <div className="home-container">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="project-title"
        >
          Project
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          The antiracist skeleton
        </motion.h1>
        <div className="video-section">
          <video autoPlay loop muted className="background-video">
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

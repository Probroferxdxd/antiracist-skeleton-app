import backgroundVideo from "../assets/backgroundVideo1.mp4";
import { motion } from "framer-motion";

export default function HomeSection() {
  const carrouselItems = [
    "Fernando B",
    "Celeste S",
    "Angela C",
    "Khalea H",
    "Angeli P",
  ];

  return (
    <div className="page-container">
      <div className="home-container">
        <div className="text-section">
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
        </div>
    
        <div className="carrousel-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="carrousel"
          >
            <div className="comment-section">
              <span className="comment-text">Team 4:</span>
            </div>
            <motion.div className="carrousel-element"
            >
              {carrouselItems.map((item, index) => (
                <div key={index} className="carrousel-item">
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
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

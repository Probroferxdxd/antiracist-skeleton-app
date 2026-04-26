import backgroundVideo from "../assets/backgroundVideo1.mp4";
import "../App.scss";
import { Search, Goal, Lightbulb, Settings, Box } from "lucide-react";

import { motion } from "framer-motion";

export default function HomeSection() {

  const carrouselItems = [
    "Fernando B",
    "Celeste S",
    "Angela C",
    "Khaela H",
    "Angeli P",
  ];

  const phases = [
    {
      name: "Empathize",
      icon: <Search />,
      text: "First Phase",
    },
    {
      name: "Define",
      icon: <Goal />,
      text: "Second Phase",
    },
    {
      name: "Ideate",
      icon: <Lightbulb />,
      text: "Third Phase",
    },
    {
      name: "Development",
      icon: <Settings />,
      text: "Fourth Phase",
    },
    {
      name: "Prototype",
      icon: <Box />,
      text: "Fifth Phase",
    },
  ];

  return (
    <div className="page-container">
      <div className="home-container">
        <section className="homepage-section-1">
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
              The anti-discriminatory skeleton
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
              <motion.div className="carrousel-element">
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
        </section>
        <section className="homepage-section-2">
          <div className="text-section">
            <motion.p>
              Unit 1: expects you to choose a specific problem related to
              identity and diversity, and propose a solution for creating better
              places to live in and improve life conditions.
            </motion.p>
          </div>
          <div className="image-container">
            <motion.div className="image-element"></motion.div>
          </div>
        </section>
        <section className="homepage-section-3">
          <div className="vertical-bar"></div>
          <div className="text-section">
            <h2>CHALLENGE</h2>
            <motion.p>
              Your challenge is to become a changemaker by exploring a
              controversial and important topic in our society: "Identity and
              Diversity." Investigate real-world issues related to identity and
              diversity in your school or community Generate creative ideas that
              could promote understanding, inclusion, and respect Develop and
              test prototypes of your proposed solution (a product, campaign,
              event, or service) Present your final idea and prototype to your
              classmates and teachers.{" "}
            </motion.p>
          </div>
          <div className="pictures-section">
            <div className="image-1"></div>
            <div className="image-2"></div>
          </div>
        </section>
        <section className="homepage-section-4">
          <div className="text-section">
            <p>
              To reach our objective, we divided the process into several
              phases, which are shown below:
            </p>
          </div>
          <div className="phases-section">
            {phases.map((phase, index) => (
              <div key={index} className="phase-element">
                <div className="phase-bar"></div>
                <div className="phase-content">
                  <div className="phase-icon">{phase.icon}</div>
                  <div className="phase-text">
                    <h3>{phase.name}</h3>
                    <p>{phase.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="homepage-section-5">
          <motion.div 
            className="image-element"
            animate={{rotate: [0, 360]}}
            transition={{duration: 10, repeat: Infinity, ease: "linear"}}
            ></motion.div>
        </section>
      </div>
    </div>
  );
}

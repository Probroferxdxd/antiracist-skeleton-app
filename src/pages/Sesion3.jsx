import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SessionTemplate from "../components/SeccionTemplate";
import "../components/sessions-styles/Session3.scss";

function AnimatedParagraph({ children, index, scrollYProgress, totalParagraphs }) {
  const stepAnimationUnitProgress = 1 / totalParagraphs;
  const start = index * stepAnimationUnitProgress;
  const end = (index + 1) * stepAnimationUnitProgress;
  const transitionProgressBuffer = stepAnimationUnitProgress * 0.3;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + transitionProgressBuffer, end - transitionProgressBuffer, end],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    scrollYProgress,
    [start, start + transitionProgressBuffer, end - transitionProgressBuffer, end],
    [40, 0, 0, -40],
  );

  return (
    <motion.p
      style={{
        opacity,
        y,
        position: "absolute",
        top: "50%",
        left: "50%",
        x: "-50%",
        y: y, // Usamos la variable y directamente aquí
        width: "100%",
        margin: 0,
        padding: "20px 20px",
      }}
    >
      {children}
    </motion.p>
  );
}

export default function Sesion3() {
  const containerRef = useRef(null);
  const paragraphs = [
    "What problem would you choose?",
    "What topics would you like to discover? Who is affected?",
    "What is it important?",
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <SessionTemplate title={"Seccion 3"}>
      <div className="title-section">
        <h2>
          OBJECTIVE: Writes an expository text systematizing the information
          from the Exploration stage, including learning goals (personal or from
          the team).
        </h2>
      </div>
      
      {/* El contenedor principal controla la altura del scroll */}
      <div className="information-section-seccion-3" ref={containerRef} style={{ height: `${paragraphs.length * 100}vh` }}>
        <div className="image-section">
          <div className="img-element"></div>
        </div>
        <div className="text-section">
          {paragraphs.map((text, index) => (
            <AnimatedParagraph
              key={index}
              index={index}
              scrollYProgress={scrollYProgress}
              totalParagraphs={paragraphs.length}
            >
              {text}
            </AnimatedParagraph>
          ))}
        </div>
      </div>
    </SessionTemplate>
  );
}

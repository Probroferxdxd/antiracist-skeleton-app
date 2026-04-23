import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Sesion1 from "./Sesion1";
import Sesion2 from "./Sesion2";
import Sesion3 from "./Sesion3";
import Sesion4 from "./Sesion4";
import Sesion5 from "./Sesion5";
import "../components/Empathize.scss";

function ProcessStep({ step, index, total, scrollYProgress }) {
  // Definimos las alturas proporcionales para el cálculo
  const bufferHeight = 0; // 200vh de espera inicial antes de empezar la rotación
  const stepHeight = 30; // 30vh por cada paso del proceso
  const totalHeight = total * stepHeight + bufferHeight;

  const bufferProgress = bufferHeight / totalHeight;
  const stepSize = (1 - bufferProgress) / total;

  const start = bufferProgress + index * stepSize;
  const end = bufferProgress + (index + 1) * stepSize;
  const transitionBuffer = stepSize * 0.3;

  // Animación de opacidad y desplazamiento (y) basada en el progreso del scroll
  const opacity = useTransform(
    scrollYProgress,
    [start, start + transitionBuffer, end - transitionBuffer, end],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    scrollYProgress,
    [start, start + transitionBuffer, end - transitionBuffer, end],
    [40, 0, 0, -40],
  );

  return (
    <motion.h2
      style={{
        opacity,
        y,
        position: "absolute",
        fontSize: "2.5rem",
        color: "#fff",
        textAlign: "center",
        width: "100%",
        margin: 0,
      }}
    >
      {step}
    </motion.h2>
  );
}

export default function Empathize() {
  const containerRef = useRef(null);
  const listProcess = [
    "User research",
    "Interviews",
    "Surveys",
    "Observations",
    "Key insights",
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Opacidad para el título fijo: aparece al entrar y desaparece al salir de la sección total
  const infoOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div className="empathize-content">
      <div className="empathize-title-content">
        <h1>Empathize</h1>
      </div>

      <div className="emphatize-features-content">
        <div className="image-section">
          <div className="image-1"></div>
          <div className="image-2"></div>
        </div>

        <div
          ref={containerRef}
          className="process-steps-container"
          style={{
            height: `${listProcess.length * 30 + 200}vh`,
            position: "relative",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              position: "sticky",
              top: "40vh",
              height: "30vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <motion.h2 
              className="empathize-info-h2"
              style={{ opacity: infoOpacity }}
            >
              The stage of gathering crucial insights
            </motion.h2>
            {listProcess.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                total={listProcess.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="empathize-hero-content">
        <div className="image-1"></div>
        <div className="image-2"></div>
        <div className="image-3"></div>
        <div className="image-4"></div>
        <div className="image-5"></div>
      </div>
    </div>
  );
}

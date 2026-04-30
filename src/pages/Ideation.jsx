import { motion, useScroll, useTransform } from "framer-motion";
import {Link} from "react-router-dom";
import { useRef } from "react";
import Sesion6 from "./Sesion6";
import Sesion7 from "./Sesion7";
import "../components/Ideation.scss";
import myVideo from "../assets/backgroundVideo3.mp4";


// Componente para cada elemento con animación desde izquierda o derecha
function AnimatedItem({ children, fromRight, delay, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromRight ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeInOut",
        delay: delay 
      }}
      style={{ ...style, position: "relative", zIndex: 2 }}
    >
      {children}
    </motion.div>
  );
}

// Componente para las imágenes con animación alternada
function AnimatedImage({ children, fromRight, delay, rotate, filter }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromRight ? 150 : -150, scale: 0.8 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.9, 
        ease: "easeInOut",
        delay: delay 
      }}
      style={{ rotate, filter }}
    >
      {children}
    </motion.div>
  );
}

export default function Ideation() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const listProcess = [
    "Problem statement (user-centered)",
    "Key needs identified",
    "Objectives",
  ];

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });

  // Transformaciones para las imágenes de fondo (movimiento ligero de scroll)
  const featureImgRotate = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const featureImgBlur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(12px)"]);

  // Scroll animation for hero images - stacked papers effect with sticky
  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  // Image 1 - starts center-stacked, moves to top-left corner
  const img1X = useTransform(heroScrollYProgress, [0, 1], ["0%", "35vw"]);
  const img1Y = useTransform(heroScrollYProgress, [0, 1], ["0%", "-35vh"]);
  const img1Rotate = useTransform(heroScrollYProgress, [0, 0.5, 1], [5, 0, -20]);
  const img1Scale = useTransform(heroScrollYProgress, [0, 0.5, 1], [1, 0.95, 0.8]);

  // Image 2 - starts slightly offset right, moves to top-right
  const img2X = useTransform(heroScrollYProgress, [0, 1], ["5%", "-35vw"]);
  const img2Y = useTransform(heroScrollYProgress, [0, 1], ["0%", "-30vh"]);
  const img2Rotate = useTransform(heroScrollYProgress, [0, 0.5, 1], [-8, 5, 25]);
  const img2Scale = useTransform(heroScrollYProgress, [0, 0.5, 1], [0.95, 0.9, 0.7]);

  // Animation for process steps - appear without disappearing
  const processSteps = listProcess.map((step, index) => ({
    content: step,
    fromRight: index % 2 === 1, // Alternar: impares desde derecha, pares desde izquierda
    delay: index * 0.15
  }));

  return (
    <div className="ideation-content">
      <div className="video-content">
        <video autoPlay loop muted className="background-video">
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
      <div className="ideation-title-content">
        <motion.h1
          className="ideation-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Ideation
        </motion.h1>
      </div>

      <div className="ideation-features-content">
        <div
          ref={containerRef}
          className="process-steps-container"
          style={{
            minHeight: "100vh",
            position: "relative",
            marginTop: "20px",
            padding: "40px 0",
          }}
        >
          <div
            className="sticky-stage"
            style={{
              position: "sticky",
              top: "20vh",
              minHeight: "60vh",
              overflow: "hidden", 
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {/* Título fijo */}
            <motion.h2
              className="ideation-info-h2"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 10 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "10vh",
                width: "100%",
                textAlign: "center",
                color: "#fff", 
                fontSize: "1.5rem",
                zIndex: 2
              }}
            >
              The stage of gathering crucial insights
            </motion.h2>

            {/* Process Steps con animación alternada */}
            {processSteps.map((step, index) => (
              <AnimatedItem 
                key={index} 
                fromRight={step.fromRight} 
                delay={step.delay}
              >
                <motion.h2
                  style={{
                    fontSize: "2.5rem",
                    color: "#fff",
                    textAlign: "center",
                    padding: "20px 40px",
                    background: "rgba(0,0,0,0.3)",
                    borderRadius: "10px",
                    margin: "10px 0",
                  }}
                >
                  {step.content}
                </motion.h2>
              </AnimatedItem>
            ))}

            {/* Imágenes de fondo centradas respecto a los textos */}
            <div className="background-images-wrapper" style={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: "250px", // Espacio amplio para no tapar el centro del texto
              width: "100%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
              pointerEvents: "none" // Para que no bloquee clics en el texto
            }}>
              <AnimatedImage 
                fromRight={false} 
                delay={0.2}
                rotate={featureImgRotate}
                filter={featureImgBlur}
              >
                <motion.div
                  className="image-1"
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative", // Anulamos el absolute del SCSS para usar el flex
                    top: "auto",
                    left: "auto"
                  }}
                >
                </motion.div>
              </AnimatedImage>

              <AnimatedImage 
                fromRight={true} 
                delay={0.4}
                rotate={featureImgRotate}
                filter={featureImgBlur}
              >
                <motion.div
                  className="image-2"
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    top: "auto",
                    right: "auto"
                  }}
                >
                </motion.div>
              </AnimatedImage>
            </div>
          </div>
        </div>
      </div>
      <div className="ideation-hero-content" ref={heroRef}>

        <motion.h2 style={{color: "#000"}} className="title-hero-content">The analysis and definition stage of the project.</motion.h2>
        <div className="images-content">

          <Link to="/antiracist-skeleton-app/sesion6" element={<Sesion6 />}>
            <motion.div 
              className="image-1 imagen-elements"
              style={{ x: img1X, y: img1Y, rotate: img1Rotate, scale: img1Scale }}
            ><span>Sesion 6</span></motion.div>
          </Link>

          <Link to="/antiracist-skeleton-app/sesion7" element={<Sesion7 />}>
            <motion.div 
              className="image-2 imagen-elements"
              style={{ x: img2X, y: img2Y, rotate: img2Rotate, scale: img2Scale }}
            ><span>Sesion 7</span></motion.div>
          </Link>
        </div>

      </div>
    </div>
  );
}

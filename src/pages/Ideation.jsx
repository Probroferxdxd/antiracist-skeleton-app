import { motion, useScroll, useTransform } from "framer-motion";
import {Link} from "react-router-dom";
import { useRef } from "react";
import Sesion6 from "./Sesion6";
import Sesion7 from "./Sesion7";
import "../components/Ideation.scss";
import myVideo from "../assets/backgroundVideo2.mp4";

function ProcessStep({ step, index, scrollYProgress, initialBufferProgress, stepAnimationUnitProgress, transitionProgressBuffer }) {
  // Calculate start and end for this specific step using provided global constants
  // These ranges are relative to the overall scrollYProgress (0 to 1) of the container
  const start = initialBufferProgress + index * stepAnimationUnitProgress;
  const end = initialBufferProgress + (index + 1) * stepAnimationUnitProgress;

  // Animación de opacidad y desplazamiento (y) basada en el progreso del scroll
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
    <motion.h2
      style={{
        opacity,
        y,
        position: "absolute", // Posicionamiento absoluto para superponerse
        top: "50%",
        left: "50%",
        x: "-50%", // Centrado horizontal mediante framer-motion
        fontSize: "3.5rem",
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

export default function Ideation() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const listProcess = [
    "Problem statement (user-centered)",
    "Key needs identified",
    "Objectives",
  ];

  // Define constants for animation and container sizing
  const STEP_ANIMATION_UNIT_VH = 30; // The conceptual height for each step's animation
  const INITIAL_BUFFER_VH = 0; // Initial scroll buffer before any step animation starts (e.g., 200 for 200vh wait)
  const END_SCROLL_BUFFER_VH = 30; // Extra scrollable height at the end of the section

  // Calculate the total height that the animations will span (0 to 1 progress)
  const totalAnimationSpanVh = listProcess.length * STEP_ANIMATION_UNIT_VH + INITIAL_BUFFER_VH;

  // Calculate the actual height of the scroll container
  const totalContainerHeightVh = totalAnimationSpanVh + END_SCROLL_BUFFER_VH;

  // Calculate progress values for the entire scroll section (0 to 1)
  // These progress values are relative to the totalContainerHeightVh
  const initialBufferProgress = INITIAL_BUFFER_VH / totalContainerHeightVh;
  const stepAnimationUnitProgress = STEP_ANIMATION_UNIT_VH / totalContainerHeightVh;
  const transitionProgressBuffer = stepAnimationUnitProgress * 0.3; // Buffer for fade-in/out within each step

  // Helper to get scroll ranges for a given step index
  const getScrollRangesForStep = (index) => {
    const start = initialBufferProgress + index * stepAnimationUnitProgress;
    const end = initialBufferProgress + (index + 1) * stepAnimationUnitProgress;
    return { start, end };
  };

  // Original listProcess (kept for reference, but the one above is used for calculations)
  const originalListProcess = [
    "User research",
    "Interviews",
    "Surveys",
    "Observations",
    "Key insights",
  ];

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });

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


  // Opacidad para el título fijo: aparece al entrar y desaparece al salir de la sección total
  const infoOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0],
  );

  // Animation for image-1 (e.g., covering steps 0 and 1)
  const image1StartRange = getScrollRangesForStep(0).start;
  const image1EndRange = getScrollRangesForStep(1).end;

  const image1Opacity = useTransform(
    scrollYProgress,
    [image1StartRange, image1StartRange + transitionProgressBuffer, image1EndRange - transitionProgressBuffer, image1EndRange],
    [0, 1, 1, 0],
  );
  const image1Y = useTransform(
    scrollYProgress,
    [image1StartRange, image1StartRange + transitionProgressBuffer, image1EndRange - transitionProgressBuffer, image1EndRange],
    [40, 0, 0, -40],
  );

  // Animation for image-2 (e.g., covering steps 2, 3, and 4)
  const image2StartRange = getScrollRangesForStep(2).start;
  const image2EndRange = getScrollRangesForStep(4).end;

  const image2Opacity = useTransform(
    scrollYProgress,
    [image2StartRange, image2StartRange + transitionProgressBuffer, image2EndRange - transitionProgressBuffer, image2EndRange],
    [0, 1, 1, 0],
  );
  const image2Y = useTransform(
    scrollYProgress,
    [image2StartRange, image2StartRange + transitionProgressBuffer, image2EndRange - transitionProgressBuffer, image2EndRange],
    [40, 0, 0, -40],
  );

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

      <div className="ideation-features-content"> {/* This div remains as a container for the whole section */}
        <div
          ref={containerRef}
          className="process-steps-container"
          style={{
            height: `${totalContainerHeightVh}vh`, // Use the calculated totalContainerHeightVh for consistency
            position: "relative",
            marginTop: "20px",
          }}
        >
          <div
            className="sticky-stage"
            style={{
              position: "sticky", // Este contenedor es el que se queda fijo en pantalla
              top: "40vh",
              height: "30vh",
              overflow: "hidden", 
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.h2
              className="ideation-info-h2"
              style={{
                opacity: infoOpacity,
                position: "absolute", // Position absolutely within the sticky container
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-150%", // Centrado perfecto
                width: "100%",
                textAlign: "center",
                color: "#fff", 
                fontSize: "1.5rem",
              }}
            >
              The stage of gathering crucial insights
            </motion.h2>

            {/* Animated Image 1 */}
            <motion.div
              className="image-1"
              style={{
                opacity: image1Opacity,
                y: image1Y,
                position: "absolute",
                width: "300px",
                height: "300px",
                top: "50%",
                left: "50%",
                // Usamos margin para desplazar la imagen del centro sin romper el sticky
                marginLeft: "-700px", 
                marginTop: "-150px",
              }}
            ></motion.div>

            {/* Animated Image 2 */}
            <motion.div
              className="image-2"
              style={{
                opacity: image2Opacity,
                y: image2Y,
                position: "absolute",
                width: "300px",
                height: "300px",
                top: "50%",
                left: "50%",
                marginLeft: "400px", 
                marginTop: "-150px",
                // Ensure background image or content is defined in CSS for .image-2
              }}
            ></motion.div>

            {listProcess.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                scrollYProgress={scrollYProgress}
                initialBufferProgress={initialBufferProgress}
                stepAnimationUnitProgress={stepAnimationUnitProgress}
                transitionProgressBuffer={transitionProgressBuffer}
              />
            ))}
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

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SessionTemplate from "../components/SeccionTemplate"
import "../components/sessions-styles/Session11.scss"

function QuestionStep({ question, index, scrollYProgress, initialBufferProgress, stepAnimationUnitProgress, transitionProgressBuffer }) {
  const start = initialBufferProgress + index * stepAnimationUnitProgress;
  const end = initialBufferProgress + (index + 1) * stepAnimationUnitProgress;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + transitionProgressBuffer, end - transitionProgressBuffer, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [start, start + transitionProgressBuffer, end - transitionProgressBuffer, end],
    [40, 0, 0, -40]
  );

  return (
    <div className="animate-section">
      <motion.h2
        className="step-question"
        style={{
          opacity,
          y,
        }}
      >
        {question}
      </motion.h2>
      <motion.p style={{
        opacity,
        y,
        color: "#fff",
      }}>
        ddddddddd
      </motion.p>
    </div>
  );
}

export default function Sesion11() {
  const containerRef = useRef(null);
  const questionsArray = [
    "What was your favourite moment?",
    "Which part was the most shocking?",
    "Who was the most interesting character?"
  ]

  const paragraph = [
    "When "
  ]

  const STEP_ANIMATION_UNIT_VH = 40;
  const INITIAL_BUFFER_VH = 0;
  const END_SCROLL_BUFFER_VH = 20;

  const totalAnimationSpanVh = questionsArray.length * STEP_ANIMATION_UNIT_VH + INITIAL_BUFFER_VH;
  const totalContainerHeightVh = totalAnimationSpanVh + END_SCROLL_BUFFER_VH;

  const initialBufferProgress = INITIAL_BUFFER_VH / totalContainerHeightVh;
  const stepAnimationUnitProgress = STEP_ANIMATION_UNIT_VH / totalContainerHeightVh;
  const transitionProgressBuffer = stepAnimationUnitProgress * 0.3;

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });

  const infoOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <SessionTemplate title={"Seccion 11"}>
      <div className="title-section">
        <h2>OBJECTIVE: Enjoy reading in English by engaging with a mystery story </h2>
      </div>
      <div className="information-section-seccion-11">
        <div
          ref={containerRef}
          className="process-steps-container"
          style={{ height: `${totalContainerHeightVh}vh`, position: "relative" }}
        >
          <div
            className="sticky-stage"
          >
            <motion.h3 
              className="step-subtitle"
              style={{ opacity: infoOpacity }}
            >
              Read individually:
            </motion.h3>
            {questionsArray.map((question, index) => (
              <QuestionStep
                key={index}
                question={question}
                paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
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
    </SessionTemplate>
  )
}

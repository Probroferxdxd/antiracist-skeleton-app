import SessionTemplate from "../components/SeccionTemplate"
import "../App.scss"
import "../components/sessions-styles/Session8.scss"
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"


export default function Sesion8() {
   const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Definimos la transición de opacidad y escala para el efecto de superposición
  // La imagen 1 desaparece a la mitad del scroll, mientras la 2 aparece
  const opacity1 = useTransform(scrollYProgress, [0, 0.45, 0.55], [1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.45, 0.55], [1, 1, 0.9]);
  
  const opacity2 = useTransform(scrollYProgress, [0.45, 0.55, 1], [0, 1, 1]);
  const scale2 = useTransform(scrollYProgress, [0.45, 0.55, 1], [0.9, 1, 1]);

  return (
    <SessionTemplate title={"Seccion 8"}>
      <div className="title-section">
        <h2>OBJECTIVE: "Recognize who the people involved are, what they need, and how we can help them."</h2>
      </div>
      <div className="scroll-wrapper" ref={containerRef} style={{ height: "200vh" }}>
        <div className="collage-section-seccion-8">
          <motion.div className="image-1" style={{ opacity: opacity1, scale: scale1 }}></motion.div>
          <motion.div className="image-2" style={{ opacity: opacity2, scale: scale2 }}></motion.div>
        </div>  
      </div> 
    </SessionTemplate>
  )
}

import "../App.scss"
import {motion} from "framer-motion"

export default function PresentationTemplate({title}){
     return(
          <div className="template-presentation">
               <motion.h1
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{delay: 0.5, duration: 1}}
                    
               >{title}</motion.h1>
          </div>
     )
}
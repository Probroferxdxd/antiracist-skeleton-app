import PresentationTemplate from "./PresentationComponent"

export default function SesionTemplate({title, children}){
     return(
          <div className="page-container">
               <div className="presentation-section">
                    <PresentationTemplate title={title} />
               </div>
               <div className="seccion-content">
                    {children}
               </div>
          </div>
     )
}
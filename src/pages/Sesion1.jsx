import "../components/sessions-styles/Session1.scss"
import "../App.scss"
import PresentationTemplate from "../components/PresentationComponent"
import SeccionTemplate from "../components/SeccionTemplate"

export default function Sesion1() {
  return (
    <SeccionTemplate title={"Seccion 1"}>
      <div style={{color: "#fff"}}>Hello world</div>
    </SeccionTemplate>
  )
}

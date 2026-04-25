import SessionTemplate from "../components/SeccionTemplate";
import "../components/sessions-styles/Session3.scss";

export default function Sesion3() {
  return (
    <SessionTemplate title={"Seccion 3"}>
      <div className="title-section">
        <h2>
          OBJECTIVE: Writes an expository text systematizing the information
          from the Exploration stage, including learning goals (personal or from
          the team).
        </h2>
      </div>
      <div className="information-section">
        <div className="image-section">
          <div className="img-element"></div>
        </div>
        <div className="text-section">
          <p>
            What problem would you choose? What topics would you like to
            discover Who is affected What is it important
          </p>
        </div>
      </div>
    </SessionTemplate>
  );
}

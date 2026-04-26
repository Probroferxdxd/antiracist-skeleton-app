import SessionTemplate from "../components/SeccionTemplate";
import "../components/sessions-styles/Session7.scss"

export default function Sesion7() {
  const ideasSection = [
    {
      title: "The 8 ideas (Crazy 8s)",
      description:
        "Some ideas are creating educational workshops, organizing clean-up days, and making social media campaigns. We can also design an app to report problems, install recycling points, and create school volunteer groups. Other ideas include educational games for children and working with institutions for support.",
      imageSrc: ""
    },
    {
      title: "The 2 best ideas (selected)",
      description:
        "The best ideas are community clean-up days and educational workshops. Clean-up days create fast results, while workshops help people learn and change their habits.",
      imageSrc: ""
    },
    {
      title: "Final idea (proposal)",
      description:
        "The final idea is a community program that combines education and action. People first learn about the problem and then help solve it. This creates both short-term and long-term impact.",
      imageSrc: ""
    },

  ];

  return (
    <SessionTemplate title={"Seccion 7"}>
      <div className="title-section">
        <h2>
          OBJECTIVE: Generate and develop multiple ideas to solve a problem
          using creative thinking techniques.
        </h2>
      </div>
      <div className="information-section-seccion-7">
        {/* Columna Izquierda: Segundo elemento (Index 1) */}
        <div className="column left-column">
          <div className="idea-card">
            <h3 className="idea-title">{ideasSection[1].title}</h3>
            <p className="idea-description">{ideasSection[1].description}</p>
            <img src={ideasSection[1].imageSrc} alt={ideasSection[1].title} className="idea-image" />
          </div>
        </div>

        {/* Columna Derecha: Primer y Tercer elemento (Index 0 y 2) */}
        <div className="column right-column">
          {[ideasSection[0], ideasSection[2]].map((idea, idx) => (
            <div key={idx} className="idea-card">
              <h3 className="idea-title">{idea.title}</h3>
              <p className="idea-description">{idea.description}</p>
              <img src={idea.imageSrc} alt={idea.title} className="idea-image" />
            </div>
          ))}
        </div>
      </div>
    </SessionTemplate>
  );
}

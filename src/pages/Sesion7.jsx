import SessionTemplate from "../components/SeccionTemplate";
import "../components/sessions-styles/Session7.scss"

export default function Sesion7() {
  const ideasSection = [
    {
      title: "The 8 ideas (Crazy 8s)",
      description:
        "Some ideas are creating educational workshops, organizing clean-up days, and making social media campaigns. We can also design an app to report problems, install recycling points, and create school volunteer groups. Other ideas include educational games for children and working with institutions for support.",
      imageSrc: "https://scontent.flim28-1.fna.fbcdn.net/v/t1.15752-9/678347954_869042496196507_590765118714210735_n.png?_nc_cat=106&ccb=1-7&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOmNvbnRyb2wiXX0%3D&_nc_ohc=7vKP2k3x4GsQ7kNvwHR6wRm&_nc_oc=AdrcwZJSeDh1h-70CHctBLyjEOechAR7Yj3wIM7MlTXdBJ7Dk6KBCnSanxQL7p_2BO0&_nc_zt=23&_nc_ht=scontent.flim28-1.fna&_nc_ss=7b6a8&oh=03_Q7cD5AGFpvJhO7QRb6pHuT0ojs2IAj5VZ9fwwjRRzSuqVnT1dA&oe=6A18B973"
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
      imageSrc: "https://scontent.flim38-1.fna.fbcdn.net/v/t1.15752-9/675275383_1259304759652041_2964368226456147989_n.png?_nc_cat=103&ccb=1-7&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOmNvbnRyb2wiXX0%3D&_nc_ohc=uSw0UnRRMxEQ7kNvwHVd9eL&_nc_oc=AdqGvyzr6AgM49XoOqHRgjER-V1irg-zhlQieuZQARwkMheWVSSLv-b9bmTSZuwIqrc&_nc_zt=23&_nc_ht=scontent.flim38-1.fna&_nc_ss=7b6a8&oh=03_Q7cD5AFIweuO70ru_MMBW5msYv2raTI7OKCFRkTwaeDsi7DdoA&oe=6A18BC7F"
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

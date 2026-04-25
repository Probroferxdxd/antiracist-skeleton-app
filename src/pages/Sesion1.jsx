import "../components/sessions-styles/Session1.scss";
import "../App.scss";
import PresentationTemplate from "../components/PresentationComponent";
import SeccionTemplate from "../components/SeccionTemplate";

export default function Sesion1() {
  const textSectionArray = [
    "Name of the speaker: Sidney Muntean",
    "Date of TED talk and number of views:  2009, more than 30 million views",
    "Main idea:  The danger of a single story is that it creates incomplete stereotypes. Understanding different perspectives helps us see the world in a more fair and human way.",
    "Adjectives highlighted:  Insightful, Powerful, Reflective",
    "Credibility:  She builds credibility by sharing her personal experiences as a Nigerian writer. She talks about real situations related to identity, culture, and stereotypes. Her career also supports her authority on this topic.",
    "Rhetorical appeal: She mainly uses Pathos, because she tells emotional personal stories that connect with the audience. She also uses Logos by explaining how stereotypes are created and how they affect society.",
    "She talks about her childhood reading foreign books to show how limited ideas can start at a young age - She clearly explains the concept of the “single story,” helping the audience understand its impact.",
    "Different stories help people develop a more complete and empathetic view of other cultures. - We should not accept only one version of reality because it limits our understanding of the world.",
    "What other perspectives could you explore to avoid forming a single story about someone or something?",
    "We should question stereotypes, listen to different voices, and learn from different cultures to avoid prejudice.",
    "Students, readers, and people interested in culture, diversity, and identity.",
  ];

  return (
    <SeccionTemplate title={"Seccion 1"}>
      <div className="title-section">
        <h2>
          RECOLECTING INFORMATION TO EMPATHIZE - Completing our "TED TALK"
          worksheet.
        </h2>
        <p>
          We watched this video to better understand the meaning of “diversity”
          and “identity” in order to build empathy among us.
        </p>
      </div>
      <div className="multimedia-section">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hFSLsZqVFiM?si=YJpS6nyTJIaUui1V"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="video-element"
        ></iframe>
        <div className="text-section">
          <ul style={{ color: "#fff" }}>
            {textSectionArray.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </SeccionTemplate>
  );
}

import SessionTemplate from "../components/SeccionTemplate";
import "../components/sessions-styles/Session10.scss";

export default function Sesion10() {
  const paragraphsArray = [
    {
      title: "Paragraph 1",
      text: "Have you ever noticed how some people are treated differently just because of their skin color or where they come from? As part of our Design Thinking project, we explored  racism in private universities and how it still affects students’ experiences. Throughout this process,we discovered that many people frequently  experience or witness situations of racism, but everyone talks about it.To address this issue,Our group created a humorous story about a skeleton from a humble background to talk about racism in a creative way.",
    },
    {
      title: "Paragraph 2",
      text: "During the exploration phase, we did research about the problem we wanted to solve. We found that racism is a global issue that has affected people’s lives in different environments for many years, causing exclusion, discrimination, and even violence. For this reason, it is important to address this problem as soon as possible.",
    },
    {
      title: "Paragraph 3",
      text: "We created a video using an AI skeleton to talk about racism in Peru, especially in universities, to raise awareness. We researched the topic and used different tools to design and edit the video. We faced some problems because the AI did not always work as expected and we had little experience with the tools. It was also difficult to explain racism in a clear and respectful way. In the end, we solved the problems by practicing and using tutorials, and we learned about AI, video editing, and social issues.",
    },
    {
      title: "Paragraph 4",
      text: "To address this issue, we designed a creative social media campaign called “Antiracism Skeleton.” Through this project, we will share short videos on Instagram that show everyday situations in universities where exclusion occurs. Our main goal is to use respectful but slightly sarcastic content to encourage more conversations about social and cultural diversity.",
    },
    {
      title: "Paragraph 5",
      text: "In conclusion, discrimination based on social or economic background is a serious problem that affects how people feel and see themselves. Through this video, we show how hurtful words and attitudes can affect people from humble backgrounds. Everyone deserves respect, no matter where they come from. By being more understanding and open-minded, we can create a more inclusive and supportive environment for everyone.",
    },
  ];

  return (
    <SessionTemplate title={"Seccion 10"}>
      <div className="title-section">
        <h2>
          OBJECTIVE: Write a blog entry to share your reflections and proposed
          solutions of your "IDENTITY AND DIVERSITY" project.{" "}
        </h2>
      </div>
      <div className="information-section-seccion-10">
        <div className="activity-section">
          <p>
            Activity: Brainstorm ideas for your own blog entry. <br />
            Questions: What issue related to identity or diversity are you
            focusing on? <br />
            What did you discover in the explore phase? What idea or solution
            did your <br />
            group design? What message do you want to share with readers?
          </p>
        </div>

        <div className="paragraphs-section">
          {paragraphsArray.map((paragraph, index) => (
            <div key={index} className={`paragraph-card p${index + 1}`}>
              <h3>{paragraph.title}</h3>
              <p>{paragraph.text}</p>
            </div>
          ))}

        </div>
      </div>
    </SessionTemplate>
  );
}

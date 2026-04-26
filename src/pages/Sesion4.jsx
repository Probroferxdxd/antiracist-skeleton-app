import "../components/sessions-styles/Session4.scss";
import "../App.scss";

import SessionTemplate from "../components/SeccionTemplate";

const expositoryTextsArray = [
  {
    title: "The skeleton with humble origin",
    paragraphs: [
      "Have you ever noticed how some people are treated differently just because of their skin color or where they come from? As part of our Design Thinking project,we explored racism in private universities and how it still affects students’ experiences. Throughout this process,we discovered that many people frequently experience or witness situations of racism, but everyone talks about it.To address this issue,Our group created a humorous story about a skeleton from a humble background to talk about racism in a creative way.",
      "During the exploration phase, we did research about the problem we wanted to solve. We found that racism is a global issue that has affected people’s lives in different environments for many years, causing exclusion, discrimination, and even violence. For this reason, it is important to address this problem as soon as possible.",
      "We created a video using an AI skeleton to talk about racism in Peru, especially in universities, to raise awareness. We researched the topic and used different tools to design and edit the video. We faced some problems because the AI did not always work as expected and we had little experience with the tools. It was also difficult to explain racism in a clear and respectful way. In the end, we solved the problems by practicing and using tutorials, and we learned about AI, video editing, and social issues.",
      "To address this issue, we designed a creative social media campaign called “Antiracism Skeleton.” Through this project, we will share short videos on Instagram that show everyday situations in universities where exclusion occurs. Our main goal is to use respectful but slightly sarcastic content to encourage more conversations about social and cultural diversity.",
      "In conclusion, discrimination based on social or economic background is a serious problem that affects how people feel and see themselves. Through this video, we show how hurtful words and attitudes can affect people from humble backgrounds. Everyone deserves respect, no matter where they come from. By being more understanding and open-minded, we can create a more inclusive and supportive environment for everyone.",
    ],
    name: "Fernando",
  },
  {
    title: "The skeleton with humble origin",
    paragraphs: [
      "Have you ever noticed how some people are treated differently just because of their skin color or where they come from? As part of our Design Thinking project,we explored racism in private universities and how it still affects students’ experiences. Throughout this process,we discovered that many people frequently experience or witness situations of racism, but everyone talks about it.To address this issue,Our group created a humorous story about a skeleton from a humble background to talk about racism in a creative way.",
      "During the exploration phase, we were doing research about the information that we wanted to solve.And we considered that racism is a global problem that is affecting the form of life in different environments for centuries, fomenting exclusion, discrimination and therefore, violence. For that reason, we have to manage that problem immediately.",
      "We created a video using an AI skeleton to talk about racism in Peru, especially in universities, to raise awareness. We researched the topic and used different tools to design and edit the video. We faced some problems because the AI did not always work as expected and we had little experience with the tools. It was also difficult to explain racism in a clear and respectful way. In the end, we solved the problems by practicing and using tutorials, and we learned about AI, video editing, and social issues.",
      "In order to address this issue, we designed a creative social media campaign called “ Antiracism Skeleton”. Through this initiative, we will share short videos on Instagram that show everyday university situations where exclusion occurs. Our main objective is to use respectful but sarcastic content and encourage more conversations about social and cultural diversity.",
      "In conclusion, discrimination based on social or economic background is a serious issue that affects how people feel and see themselves. Through this video, we show how hurtful words and attitudes can deeply impact those who come from humble origins. Everyone deserves respect, regardless of where they come from. By being more empathetic and open-minded, we can create a more inclusive and supportive environment for all.",
    ],
    name: "Khaela",
  },
  {
    title: "The skeleton with humble origin",
    paragraphs: [
      "Have you ever noticed how some people are treated differently just because of their skin color or where they come from? As part of our Design Thinking project,we explored racism in private universities and how it still affects students’ experiences. Throughout this process,we discovered that many people frequently experience or witness situations of racism, but everyone talks about it.To address this issue,Our group created a humorous story about a skeleton from a humble background to talk about racism in a creative way.",
      "During the exploration phase, we were doing research about the information that we wanted to solve.And we considered that racism is a global problem that is affecting the form of life in different environments for centuries, fomenting exclusion, discrimination and therefore, violence. For that reason, we have to manage that problem immediately.",
      "We created a video using an AI skeleton to talk about racism in Peru, especially in universities, to raise awareness. We researched the topic and used different tools to design and edit the video. We faced some problems because the AI did not always work as expected and we had little experience with the tools. It was also difficult to explain racism in a clear and respectful way. In the end, we solved the problems by practicing and using tutorials, and we learned about AI, video editing, and social issues.",
      "In order to address this issue, we designed a creative social media campaign called “ Antiracism Skeleton”. Through this initiative, we will share short videos on Instagram that show everyday university situations where exclusion occurs. Our main objective is to use respectful but sarcastic content and encourage more conversations about social and cultural diversity.",
      "In conclusion, discrimination based on social or economic background is a serious issue that affects how people feel and see themselves. Through this video, we show how hurtful words and attitudes can deeply impact those who come from humble origins. Everyone deserves respect, regardless of where they come from. By being more empathetic and open-minded, we can create a more inclusive and supportive environment for all.",
    ],
    name: "Fernando",
  },
  {
    title: "The skeleton with humble origin",
    paragraphs: [
      "Have you ever noticed how some people are treated differently just because of their skin color or where they come from? As part of our Design Thinking project,we explored racism in private universities and how it still affects students’ experiences. Throughout this process,we discovered that many people frequently experience or witness situations of racism, but everyone talks about it.To address this issue,Our group created a humorous story about a skeleton from a humble background to talk about racism in a creative way.",
      "During the exploration phase, we were doing research about the information that we wanted to solve.And we considered that racism is a global problem that is affecting the form of life in different environments for centuries, fomenting exclusion, discrimination and therefore, violence. For that reason, we have to manage that problem immediately.",
      "We created a video using an AI skeleton to talk about racism in Peru, especially in universities, to raise awareness. We researched the topic and used different tools to design and edit the video. We faced some problems because the AI did not always work as expected and we had little experience with the tools. It was also difficult to explain racism in a clear and respectful way. In the end, we solved the problems by practicing and using tutorials, and we learned about AI, video editing, and social issues.",
      "In order to address this issue, we designed a creative social media campaign called “ Antiracism Skeleton”. Through this initiative, we will share short videos on Instagram that show everyday university situations where exclusion occurs. Our main objective is to use respectful but sarcastic content and encourage more conversations about social and cultural diversity.",
      "In conclusion, discrimination based on social or economic background is a serious issue that affects how people feel and see themselves. Through this video, we show how hurtful words and attitudes can deeply impact those who come from humble origins. Everyone deserves respect, regardless of where they come from. By being more empathetic and open-minded, we can create a more inclusive and supportive environment for all.",
    ],
    name: "Fernando",
  },
  {
    title: "The skeleton with humble origin",
    paragraphs: [
      "Have you ever noticed how some people are treated differently just because of their skin color or where they come from? As part of our Design Thinking project,we explored racism in private universities and how it still affects students’ experiences. Throughout this process,we discovered that many people frequently experience or witness situations of racism, but everyone talks about it.To address this issue,Our group created a humorous story about a skeleton from a humble background to talk about racism in a creative way.",
      "During the exploration phase, we were doing research about the information that we wanted to solve.And we considered that racism is a global problem that is affecting the form of life in different environments for centuries, fomenting exclusion, discrimination and therefore, violence. For that reason, we have to manage that problem immediately.",
      "We created a video using an AI skeleton to talk about racism in Peru, especially in universities, to raise awareness. We researched the topic and used different tools to design and edit the video. We faced some problems because the AI did not always work as expected and we had little experience with the tools. It was also difficult to explain racism in a clear and respectful way. In the end, we solved the problems by practicing and using tutorials, and we learned about AI, video editing, and social issues.",
      "In order to address this issue, we designed a creative social media campaign called “ Antiracism Skeleton”. Through this initiative, we will share short videos on Instagram that show everyday university situations where exclusion occurs. Our main objective is to use respectful but sarcastic content and encourage more conversations about social and cultural diversity.",
      "In conclusion, discrimination based on social or economic background is a serious issue that affects how people feel and see themselves. Through this video, we show how hurtful words and attitudes can deeply impact those who come from humble origins. Everyone deserves respect, regardless of where they come from. By being more empathetic and open-minded, we can create a more inclusive and supportive environment for all.",
    ],
    name: "Fernando",
  },
];

export default function Sesion4() {
  return (
    <SessionTemplate title={"Seccion 4"}>
      <div className="title-section">
        <h2>OBJECTIVE: Write the final version of your expository text.</h2>
      </div>
      <div className="information-section">
          {expositoryTextsArray.map((expositoryText, index) => (
            <div className="expository-element" key={index}>
              <div className="expository-text">

              <h3>{expositoryText.title}</h3>
              {expositoryText.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
              </div>
              <div className="expository-author">
                <h2>{expositoryText.name}</h2>
              </div>
            </div>
          ))}
        
      </div>
    </SessionTemplate>
  );
}

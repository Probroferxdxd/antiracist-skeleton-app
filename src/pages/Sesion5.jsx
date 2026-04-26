import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import "../components/sessions-styles/Session5.scss";
import "../App.scss";
import SessionTemplate from "../components/SeccionTemplate"

const InteractivePieChart = ({ answers }) => {
  const colors = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#ffffff"];

  return (
    <div className="pie-chart-container-session-5">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={answers}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="percentage"
            nameKey="option"
            animationBegin={0}
            animationDuration={1500}
          >
            {answers.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} stroke="none" />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1a1a1a', 
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px'
            }}
          />
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default function Sesion5() {

  const chartArrayData = [
    {
      question: "Have you witnessed manifestations of racism in your immediate environment (educational institutions, workplaces, public spaces, or digital environments)?",
      answers: [
        {
          option: "Yes",
          percentage: 80
        },
        {
          option: "No",
          percentage: 20
        },
        
      ]
    },
     {
      question: "Have you personally experienced situations of racial discrimination throughout your life?",
      answers: [
        {
          option: "Yes",
          percentage: 20
        },
        {
          option: "No",
          percentage: 80
        },
        
      ]
    },
     {
      question: "How frequently do you identify the presence of racially discriminatory practices or discourses in your environment?",
      answers: [
        {
          option: "Never",
          percentage: 10
        },
        {
          option: "Seldom",
          percentage: 40
        },
        {
          option: "Sometimes",
          percentage: 35
        },
        {
          option: "Frequently",
          percentage: 15
        },
        
      ]
    },
     {
      question: "Do you consider racism to be a significant structural problem in contemporary societies?",
      answers: [
        {
          option: "Yes",
          percentage: 80
        },
        {
          option: "No",
          percentage: 20
        },
        
      ]
    },
     {
      question: "To what extent do you believe there is social awareness regarding the implications, consequences, and modes of reproduction of racism?",
      answers: [
        {
          option: "Yes",
          percentage: 25
        },
        {
          option: "No",
          percentage: 75
        },
        
      ]
    },
     {
      question: "Do you perceive yourself as having sufficient agency to intervene, challenge, or report situations of racial discrimination when they occur?",
      answers: [
        {
          option: "Yes",
          percentage: 55
        },
        {
          option: "No",
          percentage: 45
        },
        
      ]
    },
    {
      question: "Do you consider that the media and digital platforms contribute to the reproduction, normalization, or questioning of racial stereotypes?",
      answers: [
        {
          option: "Yes",
          percentage: 65
        },
        {
          option: "No",
          percentage: 35
        },
        
      ]
    },
    {
      question: "Have you had access to educational or informational processes related to the critical analysis of racism in educational, family, or media contexts?",
      answers: [
        {
          option: "Yes",
          percentage: 80
        },
        {
          option: "No",
          percentage: 20
        },
        
      ]
    }
  ]

  return (
    <SessionTemplate title={"Seccion 5"}>
      <div className="title-section">
        <h2>OBJECTIVE: Design and create a survey in English to collect information about people's experiences, opinions, and feelings related to a topic on identity and diversity.</h2>
        <div className="image-element"></div>
        <p className="description-element"></p>
      </div>
      <div className="information-section-seccion-5">
        {chartArrayData.map((data, index) => (
          <div key={index} className="survey-card">
            <h3 className="survey-question">{data.question}</h3>
            <InteractivePieChart answers={data.answers} />
          </div>
        ))}
      </div>
    </SessionTemplate>
  )
}

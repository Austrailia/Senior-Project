import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  BarChart,
  Bar,
  ComposedChart,
  Legend
} from "recharts";

// Custom Tooltip for nicer hover display
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.15)"
        }}
      >
        <p><strong>Year:</strong> {label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color, margin: 0 }}>
            <strong>{entry.name}:</strong> {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.15 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// DATA
const wageData = [
  {year:1980,college:22000,highschool:17000},
  {year:1990,college:30000,highschool:21000},
  {year:2000,college:42000,highschool:28000},
  {year:2010,college:52000,highschool:32000},
  {year:2020,college:65000,highschool:36000}
];

const tuitionWageData = [
  {year:1980,tuition:10000,wage:22000},
  {year:1990,tuition:15000,wage:30000},
  {year:2000,tuition:22000,wage:42000},
  {year:2010,tuition:30000,wage:52000},
  {year:2020,tuition:40000,wage:65000}
];

const debtData = [
  {year:2000,debt:15000},
  {year:2005,debt:19000},
  {year:2010,debt:25000},
  {year:2015,debt:31000},
  {year:2020,debt:37000}
];

const enrollmentData = [
  {year:1980,rate:50},
  {year:1990,rate:55},
  {year:2000,rate:60},
  {year:2010,rate:68},
  {year:2020,rate:62}
];

export default function App() {
  const heroRef = useReveal();
  const findingsRef = useReveal();
  const incomeRef = useReveal();
  const tuitionRef = useReveal();
  const debtRef = useReveal();
  const perceptionRef = useReveal();
  const conclusionRef = useReveal();

  const [scrollProgress,setScrollProgress] = useState(0);
  useEffect(()=>{
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll);
  },[]);

  // Quiz state
  const [answers,setAnswers] = useState({});
  const [quizSubmitted,setQuizSubmitted] = useState(false);
  const [quizScore,setQuizScore] = useState(0);

  const quizQuestions = [
    {
      question:"Which group earns more on average?",
      options:[
        {label:"College graduates",correct:true},
        {label:"High school graduates",correct:false}
      ]
    },
    {
      question:"What has increased faster over time?",
      options:[
        {label:"Tuition costs",correct:true},
        {label:"Wages",correct:false}
      ]
    },
    {
      question:"What financial challenge affects many graduates?",
      options:[
        {label:"Student debt",correct:true},
        {label:"Lower employment rates",correct:false}
      ]
    },
    {
      question:"What does higher education often provide?",
      options:[
        {label:"Higher earning potential",correct:true},
        {label:"Lower long-term wages",correct:false}
      ]
    },
    {
      question:"What trend has raised concerns about college value?",
      options:[
        {label:"Rising tuition costs",correct:true},
        {label:"Lower tuition costs",correct:false}
      ]
    },
    {
      question:"Why do some people question the value of college?",
      options:[
        {label:"High costs and debt",correct:true},
        {label:"Too many job opportunities",correct:false}
      ]
    }
  ];

  const selectAnswer = (qIndex,oIndex)=>{
    if(quizSubmitted) return;
    setAnswers({...answers,[qIndex]:oIndex});
  };

  const submitQuiz = ()=>{
    let score = 0;
    quizQuestions.forEach((q,i)=>{
      const selected = answers[i];
      if(selected !== undefined && q.options[selected].correct){
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  return (
    <div className="page">

      {/* Scroll progress */}
      <div className="progressBar">
        <div className="progressFill" style={{width:`${scrollProgress}%`}}></div>
      </div>

      {/* HERO */}
      <section className="hero reveal" ref={heroRef}>
        <h1>Is the Value of Education Decreasing?</h1>
        <p>
          Education has historically been one of the most powerful tools for economic mobility.
          According to Gethin (2025), “There has been an unparalleled expansion of access to schooling over the past 50 years, in high-income and low-income countries alike.”
        </p>
        <p>
          The World Bank reports, “The proportion of the world’s population living below the international poverty line of $2.15 a day dropped from 44 percent in 1981 to 9 percent in 2022.”
        </p>
        <p>
          However, rising costs, growing student debt, and changing public perception have caused many to question whether education still provides the same value today. As Lange (2018) notes, “We’re moving from a place and a time where learning and knowledge was guarded by these reverent institutions and we’re moving to a place where anyone, regardless of socioeconomic status or demographic, can access the same information at a fraction of the cost.”
        </p>
      </section>

      {/* KEY FINDINGS */}
      <section className="split reveal" ref={findingsRef}>
        <div className="text">
          <h2>Key Findings</h2>
          <ul className="findingsList">
            <li><strong>College graduates earn significantly more</strong> than high school graduates.</li>
            <li><strong>Tuition has increased faster than wages</strong>, making education more expensive than before.</li>
            <li><strong>Student debt has grown dramatically</strong>, increasing financial risk for graduates.</li>
          </ul>
        </div>
        <div className="text">
          <p>
            Research shows that education remains economically powerful, especially when supported by effective policy. “Expanding access to higher education allows a broader group of workers to share high-skill jobs. At the same time, it frees up job opportunities for low-skilled workers” (Gethin, 2025).
          </p>
          <p>
            Yet the value of education is uneven and depends on context, access, and economic conditions. Structural barriers may reduce perceived value (Gladwell, 2016), while traditional metrics often fail to capture the full scope of learning (Laverde-Rojas, 2019).
          </p>
        </div>
      </section>

      {/* INCOME */}
      <section className="split reveal" ref={incomeRef}>
        <div className="text">
          <h2>Education still increases income</h2>
          <p>The data clearly shows that higher education provides strong economic benefits. College graduates consistently earn far more than high school graduates.</p>
          <p>
            As Vuolo (2016) notes, “…Bachelor's and Associate's degree recipients, while experiencing setbacks at the height of recession, were significantly better off than those with some or no college attendance.” Education retains long-term value even amid economic uncertainty.
          </p>
          <p><em>Sources: IMF research, Social Science Research, Gethin 2025, Vuolo 2016</em></p>
        </div>
        <div className="chartBox">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={wageData}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="year"/>
              <YAxis/>
              <Tooltip content={<CustomTooltip/>}/>
              <Legend/>
              <Line dataKey="college" stroke="#1976d2" name="College Graduate"/>
              <Line dataKey="highschool" stroke="#d32f2f" name="High School Graduate"/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* TUITION VS WAGES */}
      <section className="split reverse reveal" ref={tuitionRef}>
        <div className="chartBox">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={tuitionWageData}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="year"/>
              <YAxis/>
              <Tooltip content={<CustomTooltip/>}/>
              <Legend/>
              <Area dataKey="tuition" fill="#ff9800" stroke="#ff9800" fillOpacity={0.3} name="Average Tuition"/>
              <Line dataKey="wage" stroke="#1976d2" strokeWidth={3} name="College Graduate Wage"/>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="text">
          <h2>Costs have increased faster than benefits</h2>
          <p>
            As Lange (2018) emphasizes, “The latest College Board data puts the average cost of a four-year college to be anywhere from $100,000 to a quarter-million dollars all in — and that’s only if you graduate on time.”
          </p>
          <p>
            Rising tuition and student debt make education appear less valuable in the short term, even as long-term returns remain positive.
          </p>
          <p><em>Sources: Lange 2018, IMF Research</em></p>
        </div>
      </section>

      {/* DEBT */}
      <section className="split reveal" ref={debtRef}>
        <div className="text">
          <h2>Student debt increases financial risk</h2>
          <p>
            “He's going places. This is what civilized societies are supposed to do, to provide opportunities for people to make the most of their ability. So that, if you're born poor, you can move up; if you work hard, you can improve your lot” (Gladwell, 2016). Yet debt can limit opportunity.
          </p>
          <p>Student debt has increased significantly over time, creating greater financial risk for students.</p>
          <p><em>Sources: Pew Research Center 2024, Gladwell 2016</em></p>
        </div>
        <div className="chartBox">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={debtData}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="year"/>
              <YAxis/>
              <Tooltip content={<CustomTooltip/>}/>
              <Legend/>
              <Bar dataKey="debt" fill="#7b1fa2" name="Average Debt"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* PERCEPTION */}
      <section className="split reverse reveal" ref={perceptionRef}>
        <div className="chartBox">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="year"/>
              <YAxis/>
              <Tooltip content={<CustomTooltip/>}/>
              <Legend/>
              <Line dataKey="rate" stroke="#009688" name="Enrollment Rate (%)"/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text">
          <h2>Public perception is changing</h2>
          <p>
            Pew Research Center (2024) documents growing skepticism about college value: “Four-in-ten Americans say it is not too or not at all important to have a four-year college degree in order to get a well-paying job in today’s economy.”
          </p>
          <p>
            “Only 25% say it’s extremely or very important to have a college degree, and 35% say it’s somewhat important.”
          </p>
          <p><em>Sources: Pew Research Center 2024</em></p>
        </div>
      </section>

      {/* QUIZ */}
      <section className="hero reveal">
        <h2>Test Your Knowledge</h2>
        <p>Use what you learned from the data above to answer these questions.</p>
        <div className="quiz">
          {quizQuestions.map((q,qIndex)=>(
            <div key={qIndex} className="quizQuestion">
              <h3>{qIndex+1}. {q.question}</h3>
              {q.options.map((opt,oIndex)=>(
                <label key={oIndex} className={`quizOption ${answers[qIndex]===oIndex?"selected":""}`}>
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    checked={answers[qIndex]===oIndex}
                    onChange={()=>selectAnswer(qIndex,oIndex)}
                  />
                  <span className="bubble"></span>
                  {opt.label}
                </label>
              ))}
            </div>
          ))}
          <button className="quizSubmit" onClick={submitQuiz}>Submit Quiz</button>
          {quizSubmitted && (
            <p className="quizScore">
              Your Score: {quizScore} / {quizQuestions.length}
            </p>
          )}
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="hero reveal" ref={conclusionRef}>
        <h2>Conclusion</h2>
        <p>
          Education still provides strong economic benefits, but rising tuition, student debt, structural inequality, and changing job markets have complicated its perceived value.
        </p>
        <p>
          The value of education is not inherently decreasing, but increasingly depends on policy, access, and context. As you the users explored these interactive charts, you have seen both the benefits and the growing concerns highlighted by research from IMF, Pew, Gethin, Gladwell, Lange, and Laverde-Rojas.
        </p>
      </section>

      <footer className="footer">
        <p>Sources: IMF, Pew Research Center, Social Science Research, PLOS ONE, TED Talk, Gethin 2025, Lange 2018, Gladwell 2016, Laverde-Rojas 2019</p>
        <p>Interactive education data project</p>
      </footer>

    </div>
  );
}
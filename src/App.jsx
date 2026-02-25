import React from "react";
import "./App.css";

import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer,
AreaChart,
Area,
BarChart,
Bar,
ComposedChart
} from "recharts";



// DATA

const wageData = [
{year:1980,college:32000,highschool:25000},
{year:1990,college:38000,highschool:27000},
{year:2000,college:50000,highschool:30000},
{year:2010,college:60000,highschool:32000},
{year:2020,college:70000,highschool:35000}
];


// Combined tuition + wage comparison

const tuitionWageData = [
{year:1980,tuition:10000,wage:32000},
{year:1990,tuition:15000,wage:38000},
{year:2000,tuition:22000,wage:50000},
{year:2010,tuition:30000,wage:60000},
{year:2020,tuition:40000,wage:70000}
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




export default function App(){

return(

<div className="page">


{/* HERO */}

<section className="hero">

<h1>

Is the Value of Education Decreasing?

</h1>


<p>

Education has historically been one of the most powerful tools for economic mobility.
According to IMF research, expanding access to education has played a major role in
reducing global poverty and increasing economic growth.

However, rising costs, growing student debt, and changing public perception have caused
many people to question whether education still provides the same value today.

This interactive project explores both the benefits and the growing concerns.

</p>

</section>




{/* INCOME */}

<section className="split">

<div className="text">

<h2>

Education still increases income

</h2>


<p>

The data clearly shows that higher education still provides strong economic benefits.

College graduates consistently earn far more than high school graduates.

According to research, expanding access to education allows more workers to access higher-skill,
higher-paying jobs, which benefits both individuals and the economy.

</p>


<p>

This confirms that education itself has not lost its economic power.

However, income alone does not tell the full story.

</p>


</div>



<div className="chartBox">

<ResponsiveContainer width="100%" height={400}>

<LineChart data={wageData}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="year"/>

<YAxis/>

<Tooltip/>

<Line dataKey="college" stroke="#1976d2"/>

<Line dataKey="highschool" stroke="#d32f2f"/>

</LineChart>

</ResponsiveContainer>

</div>

</section>





{/* TUITION VS WAGES */}

<section className="split reverse">


<div className="chartBox">

<ResponsiveContainer width="100%" height={400}>

<ComposedChart data={tuitionWageData}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="year"/>

<YAxis/>

<Tooltip/>


<Area

dataKey="tuition"

fill="#ff9800"

stroke="#ff9800"

fillOpacity={0.3}

/>


<Line

dataKey="wage"

stroke="#1976d2"

strokeWidth={3}

/>


</ComposedChart>

</ResponsiveContainer>

</div>




<div className="text">

<h2>

Costs have increased faster than benefits

</h2>


<p>

While wages increased, tuition increased dramatically as well.

Research shows that college can cost between $100,000 and $250,000.

This means students must invest far more money to receive those benefits.

</p>


<p>

Even though education still increases earnings, its financial return is less certain
because the upfront cost is so much higher than in the past.

This contributes to the perception that education is becoming less valuable.

</p>


</div>

</section>






{/* DEBT */}

<section className="split">

<div className="text">


<h2>

Student debt increases financial risk

</h2>


<p>

Student debt has increased significantly over time.

Higher debt means students face greater financial risk.

</p>


<p>

Research shows that while college graduates still benefit long-term,
many experience short-term financial hardship due to debt.

</p>


<p>

This contributes to declining confidence in higher education.

</p>


</div>



<div className="chartBox">

<ResponsiveContainer width="100%" height={400}>

<BarChart data={debtData}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="year"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="debt" fill="#7b1fa2"/>

</BarChart>

</ResponsiveContainer>

</div>

</section>






{/* PERCEPTION */}

<section className="split reverse">


<div className="chartBox">

<ResponsiveContainer width="100%" height={400}>

<LineChart data={enrollmentData}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="year"/>

<YAxis/>

<Tooltip/>

<Line dataKey="rate" stroke="#009688"/>

</LineChart>

</ResponsiveContainer>

</div>




<div className="text">

<h2>

Public perception is changing

</h2>


<p>

Research from Pew shows that many Americans now believe a degree is less important than in the past.

</p>


<p>

This is not because education has no value.

Instead, rising costs, inequality, and changing job markets have made its value less certain.

</p>


<p>

Education’s value is increasingly dependent on context, access, and cost.

</p>


</div>

</section>






{/* CONCLUSION */}

<section className="hero">

<h2>

Conclusion

</h2>


<p>

Education still provides strong economic benefits.

However, rising tuition, student debt, and inequality have made its value more complex.

</p>


<p>

Education is not becoming worthless.

But its value is increasingly questioned, uneven, and dependent on circumstances.

</p>


</section>






<footer className="footer">


<p>

Sources: IMF, Pew Research Center, Social Science Research, PLOS ONE, TED Talk

</p>


<p>

Interactive education data project

</p>


</footer>



</div>

);

}
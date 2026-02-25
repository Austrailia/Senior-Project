import { useState } from "react";

import {

LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

} from "recharts";

import { educationData } from "../data/globalData";

import { motion } from "framer-motion";

export default function InteractiveChart(){

const [country,setCountry]=useState("USA");

const [year,setYear]=useState(2024);

const filteredData = educationData[country].filter(
data => data.year <= year
);

return(

<motion.div

initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:1}}

>

{/* COUNTRY SELECTOR */}

<select

onChange={(e)=>setCountry(e.target.value)}

>

<option value="USA">USA</option>

<option value="World">World</option>

</select>


{/* YEAR SLIDER */}

<input

type="range"

min="2000"

max="2024"

value={year}

onChange={(e)=>setYear(e.target.value)}

/>

<p>Year: {year}</p>


{/* CHART */}

<ResponsiveContainer width="100%" height={400}>

<LineChart data={filteredData}>

<XAxis dataKey="year"/>

<YAxis/>

<Tooltip/>

<Line dataKey="earnings"/>

<Line dataKey="tuition"/>

</LineChart>

</ResponsiveContainer>

</motion.div>

);

}
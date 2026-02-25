import { publicPerception } from "../data/researchData";

import {

LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

} from "recharts";

import AnimatedSection from "../components/AnimatedSection";

export default function Perception(){

return(

<AnimatedSection

title="Public Confidence Is Declining"

text={`

Pew Research (2024) found 49% of Americans believe college is less important today.

This shows perception of value is decreasing even if actual value remains.

`}

source="Source: Pew Research (2024)"

>

<ResponsiveContainer width="100%" height={400}>

<LineChart data={publicPerception}>

<XAxis dataKey="year"/>

<YAxis/>

<Tooltip/>

<Line dataKey="importance"/>

</LineChart>

</ResponsiveContainer>

</AnimatedSection>

);

}
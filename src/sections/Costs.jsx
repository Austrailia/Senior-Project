import { tuitionGrowth } from "../data/researchData";

import {

LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

} from "recharts";

import AnimatedSection from "../components/AnimatedSection";

export default function Costs(){

return(

<AnimatedSection

title="Costs Are Rising Faster Than Benefits"

text={`

College costs have risen dramatically.

Lange (2018) reports college can cost up to $250,000.

This reduces return on investment.

`}

source="Source: Lange (2018)"

>

<ResponsiveContainer width="100%" height={400}>

<LineChart data={tuitionGrowth}>

<XAxis dataKey="year"/>

<YAxis/>

<Tooltip/>

<Line dataKey="tuition"/>

</LineChart>

</ResponsiveContainer>

</AnimatedSection>

);

}
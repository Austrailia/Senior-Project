import { inequalityAccess } from "../data/researchData";

import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

} from "recharts";

import AnimatedSection from "../components/AnimatedSection";

export default function Inequality(){

return(

<AnimatedSection

title="Education Benefits Are Unequal"

text={`

Gladwell (2016) explains structural inequality limits education mobility.

Access and outcomes depend heavily on income and social support.

`}

source="Source: Gladwell (2016)"

>

<ResponsiveContainer width="100%" height={400}>

<BarChart data={inequalityAccess}>

<XAxis dataKey="income"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="access"/>

</BarChart>

</ResponsiveContainer>

</AnimatedSection>

);

}
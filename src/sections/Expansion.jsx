import { educationExpansion } from "../data/researchData";

import {

LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

} from "recharts";

import AnimatedSection from "../components/AnimatedSection";

export default function Expansion(){

return(

<AnimatedSection

title="Education Access Has Increased Globally"

text={`

IMF (2025) reports education expansion has significantly reduced poverty.

Education remains one of the most powerful economic tools.

`}

source="Source: IMF (2025)"

>

<ResponsiveContainer width="100%" height={400}>

<LineChart data={educationExpansion}>

<XAxis dataKey="year"/>

<YAxis/>

<Tooltip/>

<Line dataKey="access"/>

</LineChart>

</ResponsiveContainer>

</AnimatedSection>

);

}
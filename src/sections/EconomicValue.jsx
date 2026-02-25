import { earningsPremium } from "../data/researchData";

import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

} from "recharts";

import AnimatedSection from "../components/AnimatedSection";

export default function EconomicValue(){

return(

<AnimatedSection

title="Education Still Provides Economic Benefits"

text={`

Research shows higher education still increases earnings.

Vuolo (2016) found degree holders earn significantly more even after recessions.

IMF (2025) also reports education expansion reduces poverty and increases economic growth.

`}

source="Sources: IMF (2025), Vuolo (2016)"

>

<ResponsiveContainer width="100%" height={400}>

<BarChart data={earningsPremium}>

<XAxis dataKey="level"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="earnings"/>

</BarChart>

</ResponsiveContainer>

</AnimatedSection>

);

}
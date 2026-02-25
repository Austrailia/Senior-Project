import { motion } from "framer-motion";

export default function AnimatedSection({title,text,children}){

return(

<motion.div

initial={{opacity:0,y:100}}

whileInView={{opacity:1,y:0}}

transition={{duration:1}}

className="section"

>

<div className="text">

<h2>{title}</h2>

<p>{text}</p>

</div>

<div className="chart">

{children}

</div>

</motion.div>

);

}
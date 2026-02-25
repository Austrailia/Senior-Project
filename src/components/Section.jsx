export default function Section({ title, text, children, source }){

return(

<div className="section">

<div className="section-text">

<h2>{title}</h2>

<p>{text}</p>

<p className="source">{source}</p>

</div>

<div className="section-chart">

{children}

</div>

</div>

);

}
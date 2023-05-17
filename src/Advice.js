import axios from "axios"
import {useState} from "react"

function Advice()
{
const[advice,setAdvice]=useState("")

const ga=(event)=>{
	event.preventDefault();
	let urladd="https://api.adviceslip.com/advice"
	axios.get(urladd)
	.then(res=>setAdvice(res.data.slip.advice))
	.catch(err=>console.log(err))
}
return(
<>
<center>
<h1> Rai sahab! </h1>
<form onSubmit={ga}>
<input type="submit" value="Rai lijiye"/>
</form>
<h1>{advice}</h1>
</center>
</>
)
}
export default Advice;
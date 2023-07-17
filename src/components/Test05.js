
import { useState } from "react"
export default function Test05(){
    const [year,setYear] = useState(2023);
    //function play(){}
    return(
        <div>
            <h1>년도 :{year}</h1>
            <p></p>
            <button type="button" 
            onClick={() =>{setYear(year + 1 )}}>
            click</button>
        </div>
    )
}
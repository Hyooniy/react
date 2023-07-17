//state 
//값의 변동매서드를 만드는것

import { useState } from "react"



//const [변수, 매서드명] = useState(변수의 초기값) 
export default function Test04(){
    const [count,setCount] = useState(0);
    //function play(){}
    return(
        <div>
            <h1>count :{count}</h1>
            <p></p>
            <button type="button" 
            //onClick={play}
            onClick={() =>{setCount(count + 1 )}}>
            click</button>
        </div>
    )
}
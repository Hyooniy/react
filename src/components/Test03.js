
function ReactBook(title,level,price, num='no05'){
    return(
        <dl>
            <dt>{title}</dt>
            <dd>{price}</dd>
            <dd>{level}</dd>
            <dd>{num} </dd>
        </dl>
    )
}
export default function Test03(){
    return(
        <ReactBook 
        title =  'react'
        price =  '10,000원'
        level =  '5'
        />
    )
}
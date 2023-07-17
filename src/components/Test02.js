// props 사용법

/* const list = {
    title : 'react',
    price : '10,000원',
    level : '5'
} */
function ReactBook(props){
    console.log(props)
    return(
        <dl>
            <dt>title:{props.title} </dt>
            <dd>price:{props.price} </dd>
            <dd>level:{props.level} </dd>
        </dl>
    )
}


//부모쪽에 넣는다

export default function Test02(){
    return(
        <ReactBook 
        title =  'react'
        price =  '10,000원'
        level =  '5'
        />
    )
}
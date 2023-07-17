const people = {
    name : 'myDog',
    source:'././images/dog.jpg',
    alt:'putty Dog',
    thmea : {
        backgroundColor:'green',
        color:'#fff'
    }
}


export default function Test01(){
    return(
        <div className="main">
           <h1>Mydog Name: {people.name}</h1>
           <img src={people.source} alt={people.alt}></img>
           <ul style={people.thmea}>
                <li>list01</li>
                <li>list02</li>
            </ul> 
        </div>
    )
}
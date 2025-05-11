function Perrameter(){

    let personinfo=["kamran",12,4.3,"third semester"];
    return(
        <>
        <App2 name={"Taha USman"} age={personinfo[0]} cgpa={"5.00"} semester={"third Semester"} />
        <App3 device_name={"Laptop"}/>
            </>
    )
}
function App2({name, age, cgpa, semester}){
    return(
        <>
            <h1>The Name Of User is {name}</h1>
            <h1>The Age Of User is {age}</h1>
            <h1>The CGPA Of User is {cgpa}</h1>
            <h1>The Semester Of User is {semester}</h1>
            
        </>
    )
}

function App3(props){
let device_name = props.device_name;
let device_price = props.device_price
return(<>

<h3>My favourite device name: {device_name}</h3>
</>)
}
export default Perrameter;

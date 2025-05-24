import React from 'react';
import './Home_Work.css';
function App1(){
    return(
        <>
        <h1>This Website is Make For Sorting The Student</h1>
        <h2>Totle Student</h2>
        <Map/>
        <h2>Filter Student</h2>
        <Filter age={20}/>
        </>
    )
}
function Map(){
    const Student = [
        {name: "John", age: 20},
        {name: "Jane", age: 22},
        {name: "Doe", age: 19},
        {name: "Smith", age: 21},
        {name: "Alice", age: 23},
        {name: "Bob", age: 18},
    ];
    let print = Student.map((item) => {
        return <li>{item.name} - {item.age}</li>;
    });
    return(
        <div>
            <h2>Student Details</h2>
            <ul>
                {print}
            </ul>
        </div>
    )
}
function Filter({age}){
    const Student = [
        {name: "John", age: 20},
        {name: "Jane", age: 22},
        {name: "Doe", age: 19},
        {name: "Smith", age: 21},
        {name: "Alice", age: 23},
        {name: "Bob", age: 18},
    ];
    let sort = Student.filter((item) => item.age < age);
    let print = sort.map((item) => {
        return <li>{item.name} - {item.age}</li>;
    });
    return(
        <div>
            <h2>Filtered Students </h2>
            <ul>
                {print}
            </ul>
        </div>
    )
}
export default App1

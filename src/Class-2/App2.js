function ConditionalRendering() {
    return (
        <>
            <h1>Conditional Rendering</h1>
            <h2>Map</h2>
            <Map/>
            <h2>Filter</h2>
            <Filter/>
        </>
    );
}
function Map(){
    let Names = ["John", "Jane", "Doe"];
  let print = Names.map((name) => (
    <li>{name}</li>
  ));

  return (
    <ul>
      {print}
    </ul>
  );
}
function Filter(){
    let Name=[
        {name:"John", age: 25},
        {name:"Jane", age: 30},
        {name:"Doe", age: 30},
        {name: "Smith", age: 40},
        {name: "Emily", age: 45},
        {name: "Michael", age: 50},
    ]
    let print = Name.filter((person) => person.age < 30);
    let personList = print.map((person) => (
        <li> {person.name} {person.age}</li>
    ));

    return (
        <ul>
            {personList}
        </ul>
    );
}
export default ConditionalRendering;
function Home_Project() {
  return (
    <>
    <h1>This is Home Project</h1>
    <h1>This is the page of Registeration</h1>
    <Student Itmes={"Student"} name={"Taha Usman"}/>
    <Student Itmes={"Teacher"} name={"Sir"}/>
    <Student Itmes={"Invalid"} name={"Shaker"}/>

    </>
    
  );
}
function Student({Itmes, name} ) {
    if (Itmes === "Student") {
        return (
            <>
                <h1>Student Name: {name}</h1>
            </>
        );
    }
    else if (Itmes === "Teacher") {
        return (
            <>
                <h1>Teacher Name: {name}</h1>
            </>
        );
    }
    else {
        return (
            <>
                <h1>Invaild Identity, This Person {name} is Not Registered</h1>
            </>
        );
    }
}
export default  Home_Project

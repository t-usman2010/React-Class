function App() {
    return (
        <div>
        <h1>
            hello
        </h1>
        <h1>
            welcome to my first project
        </h1>
        <Student />
        <teacher />
        <Course />
        </div>

    );
}
function Student(){
    return(
        <div>
            <h1>
                Taha Usman
            </h1>
            <h1>
                20 years old
            </h1>
            <h1>
                3rd semester
            </h1>
            <h1>
                3.5 CGPA
            </h1>
        </div>
    )
     
}
function teacher(){
    return(
        <div>
            <h1>Sir Khurram</h1>
            <h1>35 years old</h1>
            <h1>10 years experience</h1>
            <h1>5.0 CGPA</h1>
            <h1>Web &  App Developer</h1>
        </div>
    )
}
function Course(){
    return(
        <div>
            <h1>Web Development</h1>
            <h1>App Development</h1>
            <h1>Machine Learning</h1>
            <h1>Artificial Intelligence</h1>
        </div>
    )
}
export {App, Student, teacher, Course};               
export default App;
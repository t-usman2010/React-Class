function App() {
    let Id = "Taha Usman";
    let Password = "1234";
    if (Id === "Taha Usman" && Password === "1234"){
        return(
            <>
                <LogIn CurrentState="LogIn"/>
                <button onClick={<LogIn CurrentState="Logout"/>}>LogOut</button>
            </>
        )
    }
    else{
        <LogIn CurrentState="inavlid"/>
    }
    
  
}
function LogIn({CurrentState}) {
    if(CurrentState === "LogIn"){
        return(
            <>
                <h1>Log In</h1>
                <h1>Welcome to the Page</h1>
            </>
        )
    } else if(CurrentState === "LogOut"){
        return(
            <>
                <h1>Log Out</h1>
                <h1>Welcome to the Page</h1>
            </>
        )
    }
    else{
        return(
            <>
                <h1>Invalid Identity</h1>
                <h1>Welcome to the Page</h1>
            </>
        )
    }
}
export default App;
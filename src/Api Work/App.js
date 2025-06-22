//Hello This Page Is Created to Learn Api Work in React
import { useEffect, useState } from 'react';
import './App.css';
function App() {
    const [getpost, setpost]= useState({})
    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/Any')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setpost(data);
            })
            .catch(error => {
                alert('Error fetching the joke:', error);
            });
    }, []);

    const handleRefresh = () => {
    window.location.reload();
  };
    
    return (
        <>
            <h1 id='heading'>Api Work</h1>
            <h2 id='heading2'>Random Joke</h2>
            <h3 id='first'>{getpost.setup || getpost.joke}</h3>
            <h3 id='secound'>{getpost.delivery}</h3>
            <button id='button' onClick={handleRefresh}>Refresh</button>
        </>
    )
}
export default App;
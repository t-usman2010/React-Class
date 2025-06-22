
import React, { useEffect, useState } from "react";
import axios from "axios";

function App2() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("https://randomuser.me/api/")
            .then(response => {
                setData(response.data.results[0]);
            });
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <h1>{data ? data.gender : "Loading..."}</h1>
        </div>
)}
export default App2;
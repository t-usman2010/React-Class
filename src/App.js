import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [selectedShirt, setSelectedShirt] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/user-data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const quantitycheck = () => {
    const shirt = data.find((item) => item.name === selectedShirt);
    if (shirt) {
      if (quantity <= shirt.quantity) {
        setMessage(`✅ Yes! ${quantity} ${shirt.name}(s) are available.`);
      } else {
        setMessage(`❌ Sorry! Only ${shirt.quantity} ${shirt.name}(s) in stock.`);
      }
    } else {
      setMessage('⚠️ Please select a valid shirt.');
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <h1>Zulburrey 2.0</h1>
      <p>Check if our shirts are available</p>

      <label htmlFor="shirt-select">Select a shirt:</label>
      <select
        id="shirt-select"
        value={selectedShirt}
        onChange={(e) => setSelectedShirt(e.target.value)}
      >
        <option value="">-- Choose a shirt --</option>
        {data.map((item) => (
          <option key={item.id || item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="100"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <button onClick={quantitycheck}>Check Availability</button>

      {message && <p className="result">{message}</p>}
    </div>
  );
}

export default App;

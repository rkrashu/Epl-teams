import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [leagues, setLeagues] = useState([])
  useEffect( () => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php'
    fetch(url)
    .then (res => res.json())
    .then (data => {
      setLeagues(data.leagues)
    })
  },[])
  console.log(leagues)

  return (
    <div >
     
    </div>
  );
}

export default App;

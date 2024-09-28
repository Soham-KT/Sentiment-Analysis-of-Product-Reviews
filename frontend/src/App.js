import {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState({})
  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async ()=>{
    try{
      const response = await fetch('http://127.0.0.1:5000/data');
      const jsonData = await response.json();
      setData(jsonData);
    }
    catch(error){
      console.error(error);
    }
  }

  return (
    <div className="App">
      <h1>Front end</h1>
      <h3>Review : {data.Review}</h3>
      <br></br>
      <h3>Prediction : {data.prediction}</h3>
    </div>
  );
}

export default App;

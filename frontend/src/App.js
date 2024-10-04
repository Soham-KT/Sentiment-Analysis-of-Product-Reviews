import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');

  const [data, setData] = useState({});

  const formdata = new FormData();
  formdata.append('review', text);

  const postData = async (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/predict', formdata).then((response)=>{
      console.log('Data has been sent');
      setData(response.data);
    }).catch(()=>{
      console.log('Error sending data');
    })
  }

  return (
    <form onSubmit={postData}>
      <label>
      Enter Review:  
      </label>
      <input type='text' value={text} onChange={(e)=>{
        setText(e.target.value);
      }}></input>
      <button type='submit'>Submit</button>
      <br/>
      <label>Prediction: </label> {data.prediction}
    </form>
  );
}

export default App;

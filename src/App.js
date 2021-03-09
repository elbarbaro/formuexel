import React, { useState } from 'react';
import Form from './components/Form'
import DialogResult from './components/DialogResult'
import './App.css';

function App() {

  const [result, setResult] = useState(false)
  const [data, setData] = useState({editUrl: '', publishedUrl: ''})

  const handleResult = result => {
    setResult(result.success)
    setData({...result})
  }

  return (
    <div className="App w-full px-2 prelative">
      <Form onResult={handleResult}/>
      {result ? <DialogResult result={result} {...data}/>: null}
    </div>
  );
}

export default App;

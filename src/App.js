import React, { useState } from 'react'
import { Button, Slider } from 'antd'
import ResultsPage from './ResultsPage'
import logo from './logo.png'

const steps = [
  {
    key: 'temperature',
    type: 'search',
    content: 'TEMP',
  },
  {
    key: 'sun',
    type: 'search',
    content: 'sun',
  },
  {
    key: 'rain',
    type: 'search',
    content: 'TEMP',
  },
  {
    key: 'wind',
    type: 'search',
    content: 'wind',
  },
  {
    key: 'snow',
    type: 'search',
    content: 'snow',
  }
]

const App = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  let content
  console.log('current step', current, steps[current].key)
  switch (steps[current].key) {
    case 'temperature':
      content = (
        <>
          <h3>Choose your temperature</h3>
          <Slider  range min={0} max={40} />
        </>
      )
      break;
    case 'wind':
      content = 'How much wind?'
      break;
    case 'sun':
      content = 'How much sun?'
      break;
    case 'snow':
      content = (
        <>
          <h3>How much snow?</h3>
        </>
      )
      break;
    case 'results':
      return <ResultsPage />
    default:
  }
  return (
    <div style={{ padding: '20px' }}>
      <div>
        <h1 style={{ marginBottom: '-10px'}}>Wherever the weather  <img alt="logo" style={{ paddingLeft: '10px'}} src={logo} width={75}/></h1>

        <span>Weather destination generator</span>
      </div>
      {content}

      <Button block type='primary'  size="large" onClick={next} style={{ marginTop: '20px'}}>Next</Button>
    </div>
  );
};

export default App;

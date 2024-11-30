import { useEffect, useState } from 'react'
import MyButton from './Shared/Button'
const Header = () => {
  const [myInput1, setMyInput1] = useState("");
  const [myInput2, setMyInput2] = useState("");
  const [output,setOutput]=useState("");
  const handleInput1Change = (e) => {
    setMyInput1(e.target.value)
  }
  const handleInput2Change = (e) => {
    setMyInput2(e.target.value);
  }
  const handleButtonClick=(value)=>{
    setOutput(value)

  }
  useEffect=(()=>{
    if(output===""){
      setMyInput1(null);setMyInput2(null);
    }
  },[output])
  return (
<div className='container'>
  <h1>Welcome to my react App!</h1>
    <h4>{output}</h4>
    <div style={{ margin:'10px',display: 'flex', flexDirection: 'row' }}>
      <div style={{marginRight:'10px'}}>
        <input type='text' value={myInput1}
          onChange={handleInput1Change}
          placeholder="Enter first number" style={{ marginBottom: '20px' }} />
      </div>
      <div>
        <input type='text' value={myInput2}
          onChange={handleInput2Change}
          placeholder="Enter second number" style={{ marginBottom: '20px' }} />
      </div>
    </div>



    <MyButton input1={myInput1} input2={myInput2} onClick={handleButtonClick} />
  </div>
  )
}
const App = () => {
  return <div>
    <Header />
  </div>
}
export default App;
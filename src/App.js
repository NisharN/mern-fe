import { useState } from "react";
import axios from "axios";
function App() {
  const [fruit, setFruit] = useState("");
  function handleFruit(event) {
    setFruit(event.target.value);
  }
  function add() {
    console.log(fruit);
    var fruitAdd=axios.get("https://mern-be-k43h.onrender.com/?name="+fruit)
    fruitAdd.then((response)=>{
      console.log(response.data);
    })
  }
  return (
    <div className="App">
      <div>
        <label>fruit:</label>
        <input onChange={handleFruit} value={fruit} type="text" id="name" name="name" />
        <br/>
        <button onClick={add}>Submit</button>
        </div>
        

        </div>


  );
}

export default App;

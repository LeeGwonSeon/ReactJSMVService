import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyvalue, setKeyValue] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyValue(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  },[]);
  useEffect(() => {
    console.log("I run when 'keyvalue' changes.");
  }, [keyvalue]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyvalue & counter change");
  }, [keyvalue, counter]);
  return (
    <div>
      <input value={keyvalue} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

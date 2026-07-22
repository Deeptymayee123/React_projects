import { useState } from "react";

function App() {
  // const [counter, setCounter] = useState(0);
  let [counter, setCounter] = useState(0);

  // let counter = 0;

  const increaseVal = () => {
    // console.log(Math.floor(Math.random() * 10));
    if (counter >= 20) {
      alert("Value can not be greater than 20.");
    } else {
      // setCounter(counter + 1);
      counter = counter + 1;
      setCounter(counter);
      console.log(counter);
    }
  };
  const decreaseVal = () => {
    if (counter <= 0) {
      alert("Value can not be less than 0.");
    } else {
      counter = counter - 1;
      setCounter(counter);
      console.log(counter);
    }
  };
  return (
    <>
      <h2>Learn with Hitesh</h2>
      <p>Counter value: {counter}</p>

      <button onClick={increaseVal}>Add Value {counter}</button>
      <button onClick={decreaseVal}>Remove Value {counter}</button>
    </>
  );
}

export default App;

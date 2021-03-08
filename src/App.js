import React from "react";
import { evaluate } from "mathjs";
import './App.css';

function App() {
  const [value, setValue] = React.useState("0");
  let [number,isNumber]=React.useState(false);

  const display = (e) => {
    let oldValue = value;
    if (oldValue === "0" || number===true)
      setValue(e.target.value);
    else setValue(oldValue+e.target.value);
    isNumber(false);
    console.log('ll');
  };
  const cancel = () => {
    console.log(typeof value);
    if (value.length > 1 && value !== "Error!" &&number===false) {
      let oldValue = value.slice(0, -1);
      setValue(oldValue);
    } else {
      setValue("0");
    }
    isNumber(false);
  };
  const clearAll = () => {
    setValue("0");
    console.log("clicked");
    isNumber(false);
  };
  const result = () => {
    isNumber(true);
    try {
      let answer = evaluate(value);
      setValue('='+answer.toString());
    } catch (err) {
      setValue("Error!");
    }
  };
  const handleKey=(e)=>{
   setValue(e.key);
  }

  return (
    <div className='container'>
      <div className='calculator'>
      <div className="screen">
        <button className="screen-key" onClick={() => clearAll()}>
          CLR
        </button>
        <div className="display">{value}</div>
        <button className="screen-key" onClick={() => cancel()}>
          C
        </button>
      </div>
      <div className="keypad">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "+",
        ].map((el) => (
          <button value={el} className="key" onClick={(e) => display(e)} onKeyDown={(e)=>handleKey(e)}>
            {el}
          </button>
        ))}
        <button className="key" onClick={() => result()}>
          =
        </button>
      </div>
      </div>
    </div>
  );
}

export default App;

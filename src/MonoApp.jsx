import "./App.css";
import Counter from "./components/Counter.jsx";
import Greetings from "./components/Greetings.jsx";
import { useEffect, useState } from "react";
const MonoApp =()=> {
  const word1 = "Class";
 const [counter, setCounter] = useState(0); 
 useEffect(() => {
  console.log("this is useEffect");
}, []);
   return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Greetings word1={word1}/>

      <div>
        <p> hello {word1}</p>
        <p>Hello {counter}</p>
      </div>
     </>
  );
}

export default MonoApp;

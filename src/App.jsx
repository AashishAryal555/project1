import { useState } from "react";

const App=() => {
  const [name, setName] = useState("");

  return (
    <>

    <div>
      <h2> Name </h2>
      <input value = {name} placeholder = "type your name" onChange = {(e) => setName(e.target.value)} />
    </div>

    </>
  )
}
export default App;

const Counter = ({counter, setCounter}) => {
    
    return (
        <>
<h1>Counter</h1>
      <div className="card">
        {/* <button onClick={handleClick}> */}
        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
          counter is {counter}
        </button>
      </div>
      </>
    )
}
export default Counter;
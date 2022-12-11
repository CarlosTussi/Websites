import {
  useState,
  useRef,
  useReducer
} from "react"; 
import "./App.css";

function App() { 

  const inputRef = useRef(null); //Use to clear the input field!
  const equationRef = useRef("1");
  const resultRef = useRef(null); //Didn't use, but leaving here as future reference 
  const [result, setResult] = useState(0); 
  const [equationPlaceholder, setEquationPlaceholder] = useState("0");

  //Will show in real time to the user the result of the calculation
  const initiallEquation = {
    firstInput: "",
    operation: "",
    secondInput: ""
  }
  const [equation, setEquation] = useState(initiallEquation);
  //Will flag when an operation has been selected
  const [operationNotSelected, setOperationNotSelected] = useState(true);

  //Reducer functionality
  const [operation, dispatch] = useReducer(reducerOperation); 

  function reducerOperation(operation, action)
  {
    action.eventBtn.preventDefault();


    if(equation.firstInput != "")
    {
      switch(action.type)
      {
        case 'add':
          setEquation({...equation, operation: " + "});
        break;
        case 'minus':
          setEquation({...equation, operation: " - "});
        break;
        case 'times':
          setEquation({...equation, operation: " x "});
        break;
        case 'divide':
          setEquation({...equation, operation: " / "});
        break;
      }
      inputRef.current.value = "";
  
      //Indicated that an operation was selected
      setOperationNotSelected(false);
      inputRef.current.placeholder ="Input 2nd number";
    }
   
  }

function updateEquation(e)
{
  setEquationPlaceholder("");
  operationNotSelected ? setEquation({...equation, firstInput: e.target.value}) : setEquation({...equation, secondInput: e.target.value});
}

  function plus(e) { 
    e.preventDefault(); 
  }; 
 
  function resetInput(e) { 
    try{
      e.preventDefault(); 
    }catch{}

    setEquation({firstInput: "",
                 secondInput: "",
                 operation: ""});
    

    setEquationPlaceholder("0");
    //Resets the input field as well
    inputRef.current.value = "";
    inputRef.current.placeholder = "Input 1st number";
    setOperationNotSelected(true);
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();

    setResult(0);
    resetInput(null);
    setEquationPlaceholder("0");
  }; 

  function calculateOperation(e)
  {
    e.preventDefault();
    switch(equation.operation)
    {
      case ' + ':
        setResult(Number(equation.firstInput) + Number(equation.secondInput));
        break;
      case ' - ':
        setResult(Number(equation.firstInput) - Number(equation.secondInput));
        break;
      case ' x ':
        setResult(Number(equation.firstInput) * Number(equation.secondInput));
        break;
      case ' / ':
        setResult(Number(equation.firstInput) / Number(equation.secondInput));
        break;
    }
  }
 
  return ( 
    <div className="App"> 
      <div className="calculator-title"> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
      <label>Equation</label>
        <p>{equationPlaceholder}{equation.firstInput}{equation.operation}{equation.secondInput}</p>
        <label>Result</label>
        <p ref={resultRef}> 
          {result}
        </p> 
        <div className="input-result-container">
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Input 1st number" 
            onInput={updateEquation}
          /> 
          <button onClick={calculateOperation}>Result</button>
        </div>
        <div className="keypad-container">
          <button onClick={(e)=> dispatch({type:'add', eventBtn: e})}>+</button>
          <button onClick={(e)=> dispatch({type:'minus', eventBtn: e})}>-</button>
          <button onClick={(e)=> dispatch({type:'times', eventBtn: e})}>x</button>
          <button onClick={(e)=> dispatch({type:'divide', eventBtn: e})}>/</button>
          
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </div>
        
        
      </form> 
    </div> 
  ); 
} 
 
export default App; 

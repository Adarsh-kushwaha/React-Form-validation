import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [inputError, setInputError] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);

  useEffect(() => {
    if(inputError){
      
    }
  }, [inputError])

  const enteredNameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const inputBlurHandler = (e)=>{
    setInputTouched(true)
    if (enteredName === " ") {
      setInputError(true);
      return;
    }
  }

  const submissionHandler = (e) => {
    e.preventDefault();
    if (enteredName === " ") {
      setInputError(true);
      return;
    }
    setInputTouched(true)
    setEnteredName(" ");
    setInputError(false);
    console.log(enteredName);
  };

  const inputIsInvalid = inputError && inputTouched;

  const inputClass = inputIsInvalid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={submissionHandler}>
      <div className={inputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enteredNameHandler}
          onBlur = {inputBlurHandler}
          value={enteredName}
        />
        {inputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import useInput from "../Hook/useInput";

const BasicForm = (props) => {
  const notEmpty = (value) => value.trim() !== "";
  const emailIncludes = (value) => value.includes("@");

  const {
    value: firstNameEntered,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    hasError: firstNameInputHasError,
    valid: enteredFirstNameIsValid,
    reset: resetFirstName,
  } = useInput(notEmpty);

  const {
    value: lastNameEntered,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    hasError: lastNameInputHasError,
    valid: enteredlastNameIsValid,
    reset: resetLastName,
  } = useInput(notEmpty);

  const {
    value: emailEntered,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    hasError: emailInputHasError,
    valid: enteredEmailIsValid,
    reset: resetEmail,
  } = useInput(emailIncludes);

  let formIsValid = false;
  if(enteredFirstNameIsValid && enteredlastNameIsValid && enteredEmailIsValid){
    formIsValid=true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(!formIsValid){
      return;
    }

    console.log("submitted")
    console.log(firstNameEntered, lastNameEntered, emailEntered)
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameInputClass = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClass = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

    const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

    const disableButtonClass = formIsValid ? "" : "disable";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="fname"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameEntered}
          />
          {firstNameInputHasError && (
            <p className="error-text">This field is required</p>
          )}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameEntered}
          />
          {lastNameInputHasError && (
            <p className="error-text">This field is required</p>
          )}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailEntered}
        />
        {emailInputHasError && (
            <p className="error-text">please enter valid email</p>
          )}
      </div>
      <div className="form-actions">
        <button className={disableButtonClass} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

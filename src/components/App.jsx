import React, { useState } from "react";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [onmouseon, setmouseon] = useState(false);
  const [submitted, setsubmted] = useState(false);
  const [headingtext, setheadingtext] = useState("Register");
  const [valid, setValid] = useState(false);

  function MouseOn() {
    setmouseon(true);
  }
  function MouseOut() {
    setmouseon(false);
  }
  function handleFirstNameInput(event) {
    setValues({ ...values, firstName: event.target.value });
  }
  function handleLastNameInput(event) {
    setValues({ ...values, lastName: event.target.value });
  }
  function handleEmailInput(event) {
    setValues({ ...values, email: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }

    setsubmted(true);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="registered"> Success! Thank You For Registering.</div>
        ) : (
          <h1> {headingtext} </h1>
        )}
        <input
          onChange={handleFirstNameInput}
          value={values.firstName}
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? (
          <span>please enter your first name</span>
        ) : null}
        <input
          onChange={handleLastNameInput}
          value={values.lastName}
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? (
          <span>please enter your last name</span>
        ) : null}
        <input
          onChange={handleEmailInput}
          value={values.email}
          type="email"
          placeholder="email"
          name="email"
        />
        {submitted && !values.email ? (
          <span>please enter your email</span>
        ) : null}
        <button
          style={onmouseon ? { backgroundColor: "#0077b6" } : null}
          onMouseOver={MouseOn}
          onMouseOut={MouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

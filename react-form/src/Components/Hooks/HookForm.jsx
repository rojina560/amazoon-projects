import { useState } from "react";
import useInputState from "./useInputState";

const HookForm = () => {
    // const [name,handleNameChange] = useState('rojina')
  const emailState = useInputState('')
  const passwordState = useInputState('')
  
  const handleSubmit = e => {
      console.log(passwordState)
        console.log('form data',emailState)
        e.preventDefault();
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
          <br />
          <input {...passwordState} type="password" name="password" />
          <br />
          <input {...emailState} type="email" name="email" id="" />
          <br />
          <input  type="submit" value="submit" />
        </form>
      </div>
    );
};

export default HookForm;
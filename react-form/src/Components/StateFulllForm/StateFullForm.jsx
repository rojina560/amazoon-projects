import { useState } from "react";

const StateFullForm = () => {
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [name, setName] = useState(null);
    const [error, setError] = useState(null);
    const [password, setpassWord] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('must be type 6 character')
           
        }
        else {
            setError('')
            console.log(name,email,password,phone)
        }
        
    }
    const handleEmailSubmit = e => {
        setEmail(e.target.value)
    };
    const handlePhoneSubmit = e => {
        setPhone(e.target.value)
    };
    const handleNameSubmit = e => {
        setName(e.target.value)
    }
    
        const handlepasswordSubmit = e => {
            setpassWord(e.target.value)
        }
    
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleNameSubmit} type="text" name="name" />
          <br />
          <input onChange={handlePhoneSubmit} type="text" name="phone" />
          <br />
                <input onChange={handleEmailSubmit} type="email" name="email" id="" />
                <input onChange={handlepasswordSubmit} type="password" name="password" id="" />
          <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
               
        </form>
      </div>
    );
};

export default StateFullForm;
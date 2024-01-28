import React, { useEffect, useRef } from 'react';

const RefarForm = () => {
    const nameRef = useRef(null)
    useEffect(() => {
        nameRef.current.focus();
    },[])
    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input ref={nameRef} type="text" name="name" />
          <br />
          <input type="text" name="phone" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
};

export default RefarForm;
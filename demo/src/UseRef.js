import React, { useRef } from "react";

export default function UseRef() {
  let inputRef = useRef(null);
  function myRef() {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    // inputRef.current.style.display="none";
  }
  return (
    <div>
      <input type="text" ref={inputRef} className="me-3" />
      <button onClick={myRef}>UseRef</button>
      <br />
    </div>
  );
}

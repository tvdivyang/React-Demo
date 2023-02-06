import React from "react";

export const Loginindex =({ item,errr,onChange,value})=> {
  return (

    <>
    <div className="mb-3">
    <h6>{item.title}</h6>
      <input 
      className="form-control"  
      type={item.type} 
      value={value[item.name]}
        name={item.name}
        error={errr}
        placeholder={item.placeholder}
        onChange={(e)=>onChange(item.name, e.target.value)}
      ></input>
      <p className="text-danger">{errr[item.name]}</p>
      </div>
    </>
  );
}

export default Loginindex;

import React from "react";

export const Input = ({ item, value, onChange, }) => {


  return (
    <>
      <div className="mb-3 ">
        <h6>{item.title}</h6>
        <input
          className="form-control"
          type={item.type}
          value={value[item.name]?value[item.name]:''}
          name={item.name}
         
          // valcle={valcle}
          placeholder={item.placeholder}
          onChange={(e) => onChange(item.name, e.target.value)}
        />
     
      </div>

    </>
  );
};

export default Input;

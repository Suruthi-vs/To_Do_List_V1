import React, { Fragment } from "react";

const Inputfield= ({inputText,inputChangeHandler,placeholder,submit,currentValue,prioritychangehandler})=>{

return(
<Fragment>
<input 
  type="text" 
  value={inputText}
  onChange={inputChangeHandler}
  placeholder={placeholder}
  />
  {/* <select id = "dropdown"
   value={currentValue} 
   defaultValue={currentValue}
   onChange={prioritychangehandler}
   >
     <option value="High">High</option>
     <option value="Medium">Medium</option>
     <option value="Low">Low</option>
    
  </select> */}
  <button onClick={submit}>Add</button>
  </Fragment>
  );
};

export default Inputfield;
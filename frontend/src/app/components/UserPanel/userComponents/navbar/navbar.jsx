import React from "react";
export default function Navbar({handleshow}) {
  return (
 
    <div>
        <button className='btn btn-primary' onClick={handleshow}> signup</button>
    </div>
  );
}

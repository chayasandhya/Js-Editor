import React from "react";

function File(props) {
  return (
    <div>
      <div className="fileComp">
        <div
         contentEditable ={true}
          onClick={() => props.currentFileClick(props.eachFile)}
          className="filebtn"
          onBlur={(e)=>{
              let value = e.target.innerText;
              value = value.split(".")[0];
              props.renameFile(value, props.index);
          }}
        >
          {props.eachFile}.js
        </div>
        <button onClick={() => props.deleteFile(props.index)}>X</button>
      </div>
    </div>
  );
}

export default File;

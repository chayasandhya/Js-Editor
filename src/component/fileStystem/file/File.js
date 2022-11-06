import React from "react";

function File(props) {
  return (
    <div>
      <div className="fileComp">
        <button
          onClick={() => props.currentFileClick(props.eachFile)}
          className="filebtn"
        >
          {props.eachFile}
        </button>
        <button onClick={() => props.deleteFile(props.index)}>X</button>
      </div>
    </div>
  );
}

export default File;

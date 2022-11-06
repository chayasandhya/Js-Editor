import "./ConsoleAndTextPad.css";
import React, { useEffect, useRef, useState } from "react";

export default function ConsoleAndTextPad(props) {
  const inpRef = useRef(null);
  const [consoleData, setConsoleData] = useState();

  useEffect(() => {
    inpRef.current.value = "";
    inpRef.current.value = props.currFileData.content
      ? props.currFileData.content
      : "";
  }, [props.currFileData]);

  const onRunClick = () => {
    const inpText = inpRef.current.value;
    let out = "";
    try {
      out = eval(inpText);
    } catch (error) {
      out = `${error.toString()} 
      ${error.stack.toString()}`;
    }
    setConsoleData(out);
  };

  const clear = () => {
    setConsoleData("");
  };

  const onSave = () => {
    let cpState = { ...props.filesData };
    cpState[props.currFileData.fname] = inpRef.current.value;
    props.setFilesData(cpState);
  };

  return (
    <div className="container">
      <div>
        <div className="flexdiv">
          <div>{`Text Pad  `}</div>
          {props.currFileData.fname ? `${props.currFileData.fname}.js` : ""}
          <div>
            <button onClick={onRunClick}>Run</button>
          </div>
          <button onClick={onSave}>Save</button>
        </div>
        <textarea className="input" id="textVal" ref={inpRef} />
      </div>

      <div className="console">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{`Console >>`}</div>
          <button onClick={clear}>Clear</button>
        </div>
        <div>{consoleData}</div>
      </div>
    </div>
  );
}

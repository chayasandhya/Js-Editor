import React, { useEffect, useState } from "react";
import ConsoleAndTextPad from "./consoleAndTextPad/ConsoleAndTextPad";
import { Files } from "./fileStystem/Files";
import "./JsEditor.css";

export const JsEditor = () => {
  const [filesData, setFilesData] = useState([]);
  const [currFileData, setCurrFileData] = useState("");

  return (
    <div className="Maincontainer">
      <Files setFilesData={setFilesData} setCurrFileData={setCurrFileData} />
      <ConsoleAndTextPad  currFileData={currFileData} setFilesData={setFilesData} setCurrFileData={setCurrFileData} filesData={filesData}/>
    </div>
  );
};

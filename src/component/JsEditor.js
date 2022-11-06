import React, { useEffect, useState } from "react";
import ConsoleAndTextPad from "./consoleAndTextPad/ConsoleAndTextPad";
import { FileSystem } from "./fileStystem/FileSystem";
import "./JsEditor.css";

export const JsEditor = () => {
  const [filesData, setFilesData] = useState({});
  const [currFileData, setCurrFileData] = useState("");

  return (
    <div className="Maincontainer">
      <FileSystem
        filesData={filesData}
        setFilesData={setFilesData}
        setCurrFileData={setCurrFileData}
      />
      <ConsoleAndTextPad
        currFileData={currFileData}
        setFilesData={setFilesData}
        setCurrFileData={setCurrFileData}
        filesData={filesData}
      />
    </div>
  );
};

/*
TODo
save file - change file name - delete - save again - NOT WORKING 
re naming to already existing file name remove the current file - need to prevent it
*/ 
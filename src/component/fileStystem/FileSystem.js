import React, { useEffect, useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import File from "./file/File";
import "./FileSystem.css";

export const FileSystem = (props) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    setFiles(Object.keys(props.filesData));
  }, [props.filesData]);

  const currentFileClick = (fname) => {
    let cpState = {
      fname: fname,
      content: props.filesData[fname],
    };
    props.setCurrFileData(cpState);
  };

  const addNewFile = () => {
    let cpState = { ...props.filesData };
    let count = 0;
    let key = "untitled";
    //we loop until we find the key => we need to increment its count and check again
    //we don't find the key => add key
    while (cpState[`${key}${count ? count : ""}.js`] != undefined) {
      count++;
    }
    cpState[`${key}${count ? count : ""}.js`] = "";
    props.setFilesData(cpState);
  };

  const deleteFile = (i) => {
    const cpyState = [...files];
    const fileRemoved = cpyState.splice(i, 1);
    setFiles(cpyState);
    let cpState = { ...props.filesData };
    delete cpState[fileRemoved];
    props.setFilesData(cpState);
  };

  const renameFile = (newFileName, indexOfFile) => {};

  return (
    <div className="filesContainer">
      <div className="addfiles">
        <div>Js editor</div>
        <AiFillFileAdd onClick={addNewFile} style={{ cursor: "pointer" }} />
      </div>
      <hr />
      <div className="fileList">
        {files.map((each, i) => {
          return (
            <File
              key={i}
              index={i}
              currentFileClick={currentFileClick}
              setCurrFileData={props.setCurrFileData}
              eachFile={each}
              deleteFile={deleteFile}
              renameFile={renameFile}
            ></File>
          );
        })}
      </div>
      <div className="themes"></div>
    </div>
  );
};

import React, { useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import "./Files.css";

export const Files = (props) => {
  const [files, setFiles] = useState([]);
  const mockData = [
    { fname: "untitled.js", content: "san" },
    { fname: "untitled1.js", content: "man" },
    { fname: "untitled2.js", content: "jan" },
  ];

  const addNewFile = () => {
    let cpState = [...files];
    let count = cpState.length;
    cpState.push({
      fname: `untitled${count ? count++ : ""}.js`,
      content: "",
    });
    setFiles(cpState);
    props.setFilesData(cpState);
  };

  const currentFileClick = (fname) => {
    let cpState = [...files];
    cpState = cpState.filter((each) => each.fname == fname);

    props.setCurrFileData(cpState[0]);
  };
  return (
    <div className="filesContainer">
      <div className="addfiles">
        <div>Js editor</div>
        <AiFillFileAdd onClick={addNewFile} style={{ cursor: "pointer" }} />
      </div>
      <hr />
      <div>
        {files.map((each) => {
          return (
            <div className="addedfile">
              <button
                onClick={() => currentFileClick(each.fname)}
                className="filebtn"
              >
                {each.fname}
              </button>
            </div>
          );
        })}
      </div>
      <div className="themes"></div>
    </div>
  );
};

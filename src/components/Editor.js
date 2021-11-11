import React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../assets/css/EditorStyles.css";

const imageHandler = () => {

}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);

const Editor = (props) => {
  console.log("editor", props.step_no);
  useEffect(() => {
    console.log(props.text)
  },[props.text])

  const modules = {
    toolbar: {
      container: ("#toolbar"+props.step_no+props.idx),
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "color",
    "background",
    "image",
  ];

  return (
    <div className="text-editor">
      
      <ReactQuill
        value={props.text || ''}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        modules={modules}
        formats={formats}
        theme="snow"
      />
    </div>
  );
  
}


export default Editor;
import React from "react";
import '../assets/css/CustomToolbar.css'

const CustomHeart = () => <span>♥</span>;

const CustomToolbar = ({complete, changeFolder, step_no, idx}) => {
  console.log("customToolbar", step_no);
  return (
  <div id={"toolbar"+step_no+idx}>
    <span class="ql-formats">
      <select class="ql-font"></select>
      <select class="ql-size"></select>
    </span>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <select className="ql-color">
        <option value="blue"></option>
        <option value="#b103fc"></option>
        <option value="violet"></option>
        <option value="gold"></option>
        <option value="deepskyblue"></option>
        <option value="#00e317"></option>
        <option value="orange"></option>
        <option value="tomato"></option>
        <option value="black"></option>
      </select>
      <select className="ql-background"></select>
    <span class="ql-formats">
      <button class="ql-list" value="ordered"></button>
      <button class="ql-list" value="bullet"></button>
      <button class="ql-indent" value="-1"></button>
      <button class="ql-indent" value="+1"></button>
    </span>
    
{/* 
    
      <button style={{width:70}} onClick={complete}> 
        <div style={{margin:'10%', display:'inline-block', width:50, height:40}}> 수정완료 </div>
      </button>

      <button style={{width:100}} onClick={changeFolder}> 
        <div style={{margin:'10%', display:'inline-block', width:80, height:50}}> 교재폴더이름 </div>
      </button> */}
    
  </div>
)
    };

export default CustomToolbar;
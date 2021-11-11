import React from "react";
import '../assets/css/CustomToolbar.css'

const CustomHeart = () => <span>♥</span>;

const CustomToolbar = ({complete, changeFolder, step_no, idx}) => {
  console.log("customToolbar", step_no);
  return (
  <div id={"toolbar"+step_no+idx}>
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
      <option value="4"></option>
    </select>
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
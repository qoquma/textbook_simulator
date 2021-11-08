import React from "react";

const CustomHeart = () => <span>♥</span>;

const CustomToolbar = ({complete, changeFolder}) => (
  <div id="toolbar">
    <select className="ql-font tool-item">
      <option value="arial" selected>
        Arial
      </option>
      <option value="comic-sans">Comic Sans</option>
      <option value="courier-new">Courier New</option>
      <option value="georgia">Georgia</option>
      <option value="helvetica">Helvetica</option>
      <option value="lucida">Lucida</option>
    </select>
    <select className="ql-size tool-item">
      <option value="extra-small">Size 1</option>
      <option value="small">Size 2</option>
      <option value="medium" selected>
        Size 3
      </option>
      <option value="large">Size 4</option>
    </select>
    <select className="ql-align tool-item" />
    <select className="ql-color tool-item" />
    <select className="ql-background tool-item" />
    <button className="ql-clean tool-item" />
    <button className="ql-insertHeart tool-item">
      <CustomHeart />
    </button>
    
      <button style={{width:70}} onClick={complete}> 
        <div style={{margin:'20%', display:'inline-block', width:50, height:40}}> 수정완료 </div>
      </button>

      <button style={{width:100}} onClick={changeFolder}> 
        <div style={{margin:'10%', display:'inline-block', width:100, height:50}}> 교재폴더이름 </div>
      </button>
    
  </div>
);

export default CustomToolbar;
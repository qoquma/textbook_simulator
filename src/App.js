import React, {useState, useEffect} from 'react';
import './App.css';
import TextbookPage from './components/TextbookPage';
// import textbookJSON from './textbook/textbookJSON.json';
// import pygame_bug from './textbook/pygame_bug/pygame_bug.json';
import TEXTBOOK from './textbook/textbook.json';
import './assets/css/TextbookPage.css'
import CustomToolbar from './components/CustomToolbar';

//let textbook = python_01;
let textbook_path = './textbook/ColorSwitch/sample.json';


function App() {
  // let textbook = textbookJSON
  
  const [textbook, setTextbook] = useState(TEXTBOOK);

  useEffect(() => {
    console.log("textbook has changed",textbook);
  },[textbook]);


  const complete = () => {
    // 수정완료. api요청하면 됩니다..

    const saveText = JSON.stringify(textbook, null, "\t");

    // file setting
    const text = saveText;
    const name = "sample.json";
    const type = "text/plain";

    // create file
    const a = document.createElement("a");
    const file = new Blob([text], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    console.log(textbook)
  }

  const changeFolder = () => {
    let saveText = JSON.stringify(textbook);

    const prevFolder = textbook.textbook_folder;
    const textbookFolder = prompt("교재 폴더이름을 정확히 입력해주세요");
    if(textbook.textbook_folder===undefined) {
      setTextbook({
        ...textbook,
        "textbook_folder" : textbookFolder
      })
    } else {
      saveText = saveText.replaceAll(prevFolder, textbookFolder);
      setTextbook(JSON.parse(saveText));
    }
    
  }

  const append_description = (text, step_no, idx, type) => {

    console.log("appended");

    let new_textbook = textbook
    let object = null

    switch(type) {
      case 1:
        object = {
          "type" : "desc",
          "description": text,
        }
        break;
      case 2:
        if(textbook.textbook_folder===undefined) {
          alert("교재이름을 먼저 설정해주세요.");
          return;
        }
          
        object = {
          "type" : "image",
          "name" : "",
          "src" : textbook.textbook_folder + "/" + text
        }
        console.log(object);
        break;
    } 
  
    new_textbook.textbook_contents[step_no].step_items[idx].components.push(object);
    console.log(new_textbook.textbook_contents[step_no].step_items[idx]);
    setTextbook(new_textbook);
  }

  const remove_description = (step_no, idx, idx2) => {
    console.log(idx2);
    let new_textbook = textbook
    new_textbook.textbook_contents[step_no].step_items[idx].components.splice(idx2,1);
    //console.log(new_textbook.textbook_contents[step_no].step_items[idx].components[2])
    setTextbook(new_textbook);
  }

  const append_step = (text, step_no) => {
    let new_textbook = textbook;
    const object = {
      "title": text,
      "tags": [],
      "collapse": false,
      "components": []
    }

    new_textbook.textbook_contents[step_no].step_items.push(object);
  }

  const remove_step = (step_no, idx) => {
    let new_textbook = textbook
    new_textbook.textbook_contents[step_no].step_items.splice(idx,1);
    setTextbook(new_textbook)
  }


  return (
    <div className="frame">
    <div className="App">
      {/* <div className="CustomToolbar">
        <CustomToolbar complete={complete} changeFolder={changeFolder}/>
      </div> */}
      <TextbookPage
        textbook_title={textbook.textbook_title}
        textbook_subtitle={textbook.textbook_subtitle}
        step_description_items={textbook.textbook_contents}
        toast_step_items={textbook.textbook_contents}
        textbook_summary={textbook.textbook_summary}
        append_description={append_description}
        remove_description={remove_description}
        append_step={append_step}
        remove_step={remove_step}
      />
    </div>
    </div>
  );
}

export default App;

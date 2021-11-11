import React from 'react';
import '../assets/css/SingleStepDescription.css';
import {
    Card,
    CardTitle,
    CardHeader,
    CardBody,
    Collapse,
    //CardImg,
    //CardLink,
} from 'reactstrap';
//import { Collapse } from '@material-ui/core'
import {
    PlusSquare, MinusSquare
} from "react-feather";
//import { API_URL, API_PROTOCOL } from '../../config';
import reactHtmlParser from 'react-html-parser';
// let SyntaxHighlighter = await import ('react-syntax-highlighter');
// let dark = await import ('react-syntax-highlighter/dist/esm/styles/prism');
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialDark, materialLight, vs, duotoneLight} from 'react-syntax-highlighter/dist/esm/styles/prism'

import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';
import Editor from './Editor';
import CustomToolbar from './CustomToolbar';

//const URL = API_PROTOCOL + API_URL;

class SingleStepDescription extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collapse1: this.props.collapse,
            text: ''
        }
        this.handleChange = this.handleChange.bind(this)
        
    }

    handleChange(value) {
      this.setState({ text: value })
    }

    toggle = () =>{
        this.setState({collapse1: !this.state.collapse1});
    }

    setFile = (event) => {
      // Get the details of the files
      console.log(event.target.files[0])
      this.props.append_description(event.target.files[0].name, this.props.step_no , this.props.idx, 2)
      this.forceUpdate()
    }

    render() {
        let count_for_key = 0;
        const { collapse1 } = this.state;
        const markdown = `A paragraph with *emphasis* and **strong importance**.
        
        > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
        A table:

        | a | b |
        | - | - |
        `
        const {title,description_title, components} = this.props;


        const RemoveButton = ({idx2}) => (
          <button className={"RemoveButton"} 
            onClick={()=>{
              //console.log(idx2);
              this.props.remove_description(this.props.step_no, this.props.idx, idx2)
              this.forceUpdate()
            }}
          >
            제거
          </button>
        )

        const step_components = (components.length > 0) ? components.map((comp, idx2) => {
            if (comp.type === "image") {
                count_for_key += 1;
                return (
                    <div key={comp.src+count_for_key} style={{alignItems: "center"}}>
                      {console.log(comp.src)}
                      <div>
                        <img src={require('../textbook/'+comp.src)} alt={comp.name} width="300px" />
                        <br />
                        <b> {reactHtmlParser(comp.name? comp.name:null)} </b>
                        <br />
                      </div>
                        
                        <RemoveButton idx2={idx2} />
                    </div> 
                    
                );
            } else if (comp.type === "desc") {
                count_for_key += 1;
                return (
                <div className={"CardDescription"} key={comp.description+count_for_key}>
                    <div>
                        {/* {reactHtmlParser(comp.description)} */}
                        <Markdown 
                            children={comp.description} rehypePlugins={[rehypeRaw]} />
                    </div>
                    <RemoveButton idx2={idx2}/>
                </div>
                );

            } else if (comp.type === "table") {
                count_for_key += 1;
                return(
                <div className={"CardDescription"} key={comp.description+count_for_key}>
                        {/* {reactHtmlParser(comp.description)} */}
                    <Markdown 
                        children={comp.description} 
                        remarkPlugins={[[gfm, {borderWidth: "1px"}]]}
                    />
                    <RemoveButton idx2={idx2}/>
                </div>
                );
            } else if (comp.type === "code") {
                count_for_key += 1;
                return (
                <div className={"CardDescription"} key={comp.code+count_for_key}>
                <Markdown
                    children={comp.code}
                    components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            style={materialLight}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                        ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                        )
                    }
                    }}
                />
                <RemoveButton idx2={idx2}/>
                </div>);

            }
        }) :
        ( "" ) 

        
        const card1 = (
            <Card className={"Card"}>
                <CardHeader className={"CardHeader"}>
                    <CardTitle className={"CardTitle"} tag="h4" > 
                    {
                        (collapse1) ? 
                        <MinusSquare className={"SquareIcon"} onClick={this.toggle}/>
                        :
                        <PlusSquare className={"SquareIcon"} onClick={this.toggle}/>
                    }
                    {title}
                    </CardTitle>
                </CardHeader>
                
                <Collapse
                    isOpen={collapse1}
                >
                <CardBody className="CardBody">
                    {reactHtmlParser(description_title)}
                    {/* {step_item_images} */}
                    {/* {step_item_descriptions} */}
                    {step_components}
                    {/*
                      <Editor placeholder={""} text={this.state.text} handleChange={this.handleChange}/>
                    <button onClick={()=>{append_description(this.state.text, step_no , idx)}}>추가</button>
                    */}
                    {
                      collapse1 && (
                      <div>
                        <CustomToolbar idx={this.props.idx} step_no={this.props.step_no}/>
                        <Editor placeholder={""} text={this.state.text} handleChange={this.handleChange} idx={this.props.idx} step_no={this.props.step_no}/>
                      </div>
                      )
                    }
                    
                    <button onClick={()=>{
                        this.props.append_description(this.state.text, this.props.step_no , this.props.idx, 1)
                 
                        this.forceUpdate()
                      }}
                    >
                      추가
                    </button>
                    <input type="file" name="file" onChange={this.setFile.bind(this)} />
                </CardBody>
                </Collapse>
            </Card>
        );
        return (
            <div>
                {card1}
            </div>
                
        );
    }
}

export default SingleStepDescription;
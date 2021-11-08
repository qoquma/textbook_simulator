import React from 'react';
//import '../assets/css/StepDescriptions.css';
import {
    Container,
} from 'reactstrap';
import SingleStepDescription from './SingleStepDescription'

class StepDescriptions extends React.Component {

  state = {
    title: ''
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

    render() {
        let count_for_key = 0;
        const {step_title, step_items, step_no, append_description, remove_description} = this.props;
        const descriptions = step_items.map((item, idx) => {
            count_for_key += 1;
            return (
              <>
                <SingleStepDescription
                    key = {item.title+count_for_key}
                    title={item.title?item.title:null}
                    collapse={item.collapse}
                    images={item.images?item.images:null}
                    description_title={item.description_title?item.description_title:null}
                    descriptions={item.descriptions?item.descriptions:null}
                    components={item.components?item.components:null}
                    append_description={append_description}
                    remove_description={remove_description}
                    step_no={step_no}
                    idx={idx}
                />
                <button className={"RemoveButton"} 
                  onClick={()=>{
                    //console.log(idx2);
                    this.props.remove_step(step_no, idx);
                    this.forceUpdate();
                  }}
                >
                  제거
                </button>
              </>
            )
        })
        return (
            <Container style={{borderRadius:"20px",background:"#f9f7e8",paddingBottom:"1px", marginBottom:"10px"}}>
                <br></br>
                <b style={{fontSize:"calc(3px + 2vmin)"}}>{"Step."+step_no+" "+step_title}</b>
                <br></br>
                <br></br>
                {descriptions}
                <input value={this.state.title} name="title" onChange={this.handleChange} />
          
                <button onClick={()=>{
                    this.props.append_step(this.state.title, this.props.step_no , this.props.idx, 1)
                    this.forceUpdate()
                  }}
                >
                  추가
                </button>
            </Container>
        );
    }
}

export default StepDescriptions;
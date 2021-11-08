import React from 'react';
//import '../assets/css/StepDescriptions.css';
import {
    Container,
} from 'reactstrap';
import SingleStepDescription from './SingleStepDescription'

class StepDescriptions extends React.Component {

    render() {
        let count_for_key = 0;
        const {step_title, step_items, step_no, append_description, remove_description} = this.props;
        const descriptions = step_items.map((item, idx) => {
            count_for_key += 1;
            return (
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
            )
        })
        return (
            <Container style={{borderRadius:"20px",background:"#f9f7e8",paddingBottom:"1px", marginBottom:"10px"}}>
                <br></br>
                <b style={{fontSize:"calc(3px + 2vmin)"}}>{"Step."+step_no+" "+step_title}</b>
                <br></br>
                <br></br>
                {descriptions}
            </Container>
        );
    }
}

export default StepDescriptions;
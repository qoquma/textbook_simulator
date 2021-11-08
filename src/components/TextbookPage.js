import React from 'react';
//import '../assets/css/TextbookPage.css';
import StepDescriptions from './StepDescriptions';
import ToastStep from './ToastStep';
import TextbookHeader from './TextbookHeader';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import { API_URL, API_PROTOCOL } from '../../config';
//const URL = API_PROTOCOL + API_URL;
class TextbookPage extends React.Component{

    render() {
        let count_for_key = 0;
        const { textbook_summary, textbook_title,textbook_subtitle, step_description_items,toast_step_items, append_description, remove_description } = this.props;
        const step_diescriptions = step_description_items?step_description_items.map((item) => {
            count_for_key += 1;
            return (
                <StepDescriptions
                    key = {item.step_title+count_for_key}
                    step_title={item.step_title?item.step_title:null}
                    step_items={item.step_items?item.step_items:[]}
                    step_no={item.step_no?item.step_no:(count_for_key-1)}
                    append_description={append_description}
                    remove_description={remove_description}
                />
            )
        }):""
        const toast_steps = toast_step_items.map((item)=>{
            count_for_key += 1
            const image_src = (item.step_items && item.step_items[0].images && item.step_items[0].images.length>0 && item.step_items[0].images[0].src)? (require("../textbook/"+item.step_items[0].images[0].src)) : null
            return(
                <Grid item xs={3} key={item.step_title+count_for_key}>
                    <Paper>
                        <ToastStep
                        title = {item.step_title?item.step_title:null}
                        img = {image_src}
                        step = {item.step_no?item.step_no:count_for_key-1}
                        />
                    </Paper>
                </Grid>
            )
        })
        return (
            <div>
                <TextbookHeader
                    title={textbook_title?textbook_title:null}
                    stage={textbook_subtitle.stage?textbook_subtitle.stage:null}
                    language={textbook_subtitle.language?textbook_subtitle.language:null}
                    level={textbook_subtitle.level?textbook_subtitle.level:null}
                    summary={textbook_summary?textbook_summary:null}
                />

                
                <div >
                    <br></br>
                    <Grid container spacing={2}
                    direction="row"
                    alignItems="center"
                    justify="center"
                    //style={{ minHeight: '100vh' }}
                    >
                        {toast_steps}
                    </Grid>
                    <br></br>
                </div>
                {step_diescriptions}
            </div>
        );
    }
}

export default TextbookPage;
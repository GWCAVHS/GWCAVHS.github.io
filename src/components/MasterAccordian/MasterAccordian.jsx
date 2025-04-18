import * as React from 'react';
import './MasterAccordian.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CourseSelection from '../CourseSelection/CourseSelection';


const MasterAccordian = ({subject, courseDescription}) => {
  return (
    <div className="CourseListAccordian">
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"><CourseSelection course={subject} /></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {courseDescription}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MasterAccordian;

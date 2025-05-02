// add styles from App.css
import './App.css';
import AppTitle from './components/AppTitle/AppTitle';
import GradeDisplay from './components/GradeDisplay/GradeDisplay';
import CourseSelection from './components/CourseSelection/CourseSelection';
import MasterAccordian from './components/MasterAccordian/MasterAccordian';
import CourseDescriptionModal from './components/Modal/CourseDescription';

function App() {
  return (
    <div className="App">
        <MasterAccordian subject={'English'} courseDescription={"English 101, English 102"} /> 
        <MasterAccordian subject={'Math'} courseDescription={"Math 101, Math 102"} /> 
        <MasterAccordian subject={'Science'} courseDescription={"Science 101, Science 102"} /> 
        <MasterAccordian subject={'Social Studies'} courseDescription={"Social Studies 101, Social Studies 102"} />
        <MasterAccordian subject={'Electives'} courseDescription={"Electives 101, Electives 102"} />  
        <AppTitle title={'PLANN IT'} />
        <GradeDisplay grade={"Grade 9"} />
        <GradeDisplay grade={"Grade 10"} />
        <GradeDisplay grade={"Grade 11"} />
        <GradeDisplay grade={"Grade 12"} />
        
        <br />
        <br />
        <CourseDescriptionModal
          courseName="Math 101"
          credits={3}
          description="This is a math class."
          prereq="N/A"
          concurrent="N/A"
        />
    </div>
    
  );
}

export default App;

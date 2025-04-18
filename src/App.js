// add styles from App.css
import './App.css';
import AppTitle from './components/AppTitle/AppTitle';
import GradeDisplay from './components/GradeDisplay/GradeDisplay';
import CourseSelection from './components/CourseSelection/CourseSelection';
import MasterAccordian from './components/MasterAccordian/MasterAccordian';


function App() {
  return (
    <div className="App">
        <MasterAccordian subject={'English'} courseDescription={"English 101, English 102"} /> 
        <MasterAccordian subject={'Math'} courseDescription={"Math 101, Math 102"} /> 
        <MasterAccordian subject={'Science'} courseDescription={"Science 101, Science 102"} /> 
        <MasterAccordian subject={'Social Studies'} courseDescription={"Social Studies 101, Social Studies 102"} />
        <MasterAccordian subject={'Electives'} courseDescription={"Electives 101, Electives 102"} />  
    </div>
  );
}

export default App;

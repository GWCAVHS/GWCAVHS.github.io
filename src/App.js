// add styles from App.css
import './App.css';
import AppTitle from './components/AppTitle/AppTitle';
import CourseCard from './components/CourseCards/CourseCard';
import GradeDisplay from './components/GradeDisplay/GradeDisplay';
import CourseSelection from './components/CourseSelection/CourseSelection';
import MasterAccordian from './components/MasterAccordian/MasterAccordian';
import CourseDescriptionModal from './components/Modal/CourseDescription';
import performingArtsCourses from './courseData/performing_arts_2025.json';

function App() {
  return (
    <div className="App">
        <AppTitle title={'PLANN IT'} />
        <MasterAccordian subject={'English'} courseDescription={"English 101, English 102"} /> 
        <MasterAccordian subject={'Math'} courseDescription={"Math 101, Math 102"} /> 
        <MasterAccordian subject={'Science'} courseDescription={"Science 101, Science 102"} /> 
        <MasterAccordian subject={'Social Studies'} courseDescription={"Social Studies 101, Social Studies 102"} />
        <MasterAccordian subject={'Electives'} courseDescription={"Electives 101, Electives 102"} />  
        <GradeDisplay grade={"Grade 9"} />
        <GradeDisplay grade={"Grade 10"} />
        <GradeDisplay grade={"Grade 11"} />
        <GradeDisplay grade={"Grade 12"} />
        
        <br />
        <br />
        {performingArtsCourses.map((course) => (
          <CourseDescriptionModal
          courseName={course['Course Name']}
          credits={course["Credits"]}
          description={course["Description"]}
          prereq={course["Prerequisite"]}
          concurrent={course["Concurrent Enrollment"]}
        />
        ))}
        <CourseDescriptionModal
          courseName="Math 101"
          credits={3}
          description="This is a math class."
          prereq="N/A"
          concurrent="N/A"
        />

        <br />
        <CourseCard />
    </div>
    
  );
}

export default App;

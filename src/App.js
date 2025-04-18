// add styles from App.css
import './App.css';
import AppTitle from './components/AppTitle/AppTitle';
import CourseCard from './components/CourseCards/CourseCard';
import GradeDisplay from './components/GradeDisplay/GradeDisplay';
import CourseDescriptionModal from './components/Modal/CourseDescription';
import performingArtsCourses from './courseData/performing_arts_2025.json';

function App() {
  return (
    <div className="App">
        <AppTitle title={'PLANN IT'} />
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

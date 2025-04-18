// add styles from App.css
import './App.css';
import AppTitle from './components/AppTitle/AppTitle';
import GradeDisplay from './components/GradeDisplay/GradeDisplay';
import CourseDescriptionModal from './components/Modal/CourseDescription';

function App() {
  return (
    <div className="App">
        <AppTitle title={"PLANN IT"} />
        <GradeDisplay grade={9} />
        <GradeDisplay grade={10} />
        <GradeDisplay grade={11} />
        <GradeDisplay grade={12} />

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

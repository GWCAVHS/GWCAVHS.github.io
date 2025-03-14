// add styles from App.css
import './App.css';
import AppTitle from './components/AppTitle/AppTitle';
import GradeDisplay from './components/GradeDisplay/GradeDisplay';
import CourseSelection from './components/CourseSelection/CourseSelection';

function App() {
  return (
    <div className="App">
        <AppTitle title={'PLANN IT'} />
        <GradeDisplay grade={9} />
        <GradeDisplay grade={10} />
        <GradeDisplay grade={11} />
        <GradeDisplay grade={12} />
        <CourseSelection course={'math 1'} />
        <CourseSelection course={'math 2'} />
        <CourseSelection course={'math 3'} />
        <CourseSelection course={'math 4'} />
    </div>
  );
}

export default App;

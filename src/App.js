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
        <CourseSelection course={'English'} />
        <CourseSelection course={'Math'} />
        <CourseSelection course={'Science'} />
        <CourseSelection course={'Social Studies'} />
        <CourseSelection course={'Electives'} />
    </div>
  );
}

export default App;

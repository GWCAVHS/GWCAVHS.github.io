// add styles from App.css
import './App.css';
import GradeHeader from './components/grade-header/grade-header';

function App() {
  return (
    <div className="App">
        <h1>hello world</h1>
        <GradeHeader grade="9"></GradeHeader>
        <GradeHeader grade="10"></GradeHeader>
        <GradeHeader grade="11"></GradeHeader>
        <GradeHeader grade="12"></GradeHeader>
    </div>
    
  );
}

export default App;

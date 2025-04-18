// add styles from App.css
import './App.css';
import GradeHeader from './components/grade-header/grade-header';

function App() {
  return (
    <div className="App">
        <AppTitle title={'PLANN IT'} />
        <GradeDisplay grade={"Grade 9"} />
        <GradeDisplay grade={"Grade 10"} />
        <GradeDisplay grade={"Grade 11"} />
        <GradeDisplay grade={"Grade 12"} />
        
    </div>
    
  );
}

export default App;

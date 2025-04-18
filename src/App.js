// add styles from App.css
import './App.css';
import AppTitle from './components/AppTitle/AppTitle';
import GradeDisplay from './components/GradeDisplay/GradeDisplay';

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

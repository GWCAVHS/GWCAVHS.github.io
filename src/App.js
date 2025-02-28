// add styles from App.css
import './App.css';
import AppTitle from './components/AppTitle/AppTitle';
import GradeDisplay from './components/GradeDisplay/GradeDisplay';

function App() {
  return (
    <div className="App">
        <AppTitle title={'PLANN IT'} />
        <GradeDisplay grade={9} />
        <GradeDisplay grade={10} />
        <GradeDisplay grade={11} />
        <GradeDisplay grade={12} />
    </div>
  );
}

export default App;

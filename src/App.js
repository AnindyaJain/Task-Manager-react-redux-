import './App.css';
import InputField from './components/input';
import TaskLIst from './components/taskList';
import '../src/App.css'

function App() {
  return (
    <div className="bg">
      <p className="typewriter">Never lose track of needful activities!</p>
      <InputField />
      <TaskLIst />
    </div>
  );
}

export default App;

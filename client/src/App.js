import './App.css';
import Draft from './components/draft'
import { blg, t1} from './data/teams'

function App() {
  return (
    <Draft team1={blg} team2={t1}/>
  );
}

export default App;

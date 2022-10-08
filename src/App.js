import './App.css';
import List from './List';
const users = [
{name: 'Ahmad', age: 30},
{name: 'Yousef', age: 12},
{name: 'Shatha', age: 14},
{name: 'Rana', age: 22},
{name: 'Osama', age: 22},
{name: 'Ahmad', age: 38} ];
function App() {
  return (
    <div className="App">
     <List group={users} />
    </div>
  );
}

export default App;

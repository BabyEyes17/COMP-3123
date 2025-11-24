import './App.css';
import UserContext, {UserProvider} from './context/UserContext'
import UserChild1 from './components/UserChild1';

const user = {
  first_name: 'Pritesh',
  last_name: 'Patel',
  city: 'Toronto',

  display() {
    return `${this.first_name} ${this.last_name} from ${this.city}`;
  },

  setFirstName(value){
    this.first_name = value;
  }
}

function App() {
  return (
    <div>
      <h1>React Context API examples</h1>
      <UserProvider value={user}>
        <UserChild1 />
      </UserProvider>
    </div>
  );
}

export default App;

import { UserProvider } from './contexts/UserProvider';
import Dashbord from './components/Dashbord';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Dashbord />
      </div>
    </UserProvider>
  );
}

export default App;
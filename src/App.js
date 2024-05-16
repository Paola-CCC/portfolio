import './App.css';
import Router from './Router';
import { Header} from './components';

function App() {
  
  return (
    <>
          <Header />
          
          <main className="App">
            <Router />
          </main>
    </>
   
  );
}

export default App;

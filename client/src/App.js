import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

//IMPORT SCREENS
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='*' element={<Login to='/' />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

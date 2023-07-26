import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Signin } from "./Mycomponent/Signin"
import { Homepage } from "./Mycomponent/Homepage"
import { Account } from "./Mycomponent/Account"
import { Createpage } from './Mycomponent/Createpage';
// import { AuthContextProvider } from './Mycomponent/context/AuthContext';

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/account" element={<Account />}/>
          {/* <Route path="/signin" element={<Signin/>}/> */}
          <Route path="/" element={<Homepage />}/>
          <Route path="/register" element={<Createpage />}/>
        </Routes>
      </Router>
    
    </>
  );
}

export default App;

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
import { AuthContextProvider } from './Mycomponent/context/AuthContext';

function App() {
  return (
    <>
     <AuthContextProvider>
     <Router>
        <Routes>
          <Route path="/account" element={<Account />}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/" element={<Homepage />}/>
        </Routes>
      </Router>
    </AuthContextProvider>
    
    </>
  );
}

export default App;

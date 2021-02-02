import "./App.css";
import LoginPage from "./pages/loginpage/loginPage"
import { BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from './components/navbar/navbar'

function App() {
  return (
 <Router>
      <Navbar />
      <Route exact path = "/login" component={LoginPage}/>
      
 </Router>
      
 
  );
}

export default App;

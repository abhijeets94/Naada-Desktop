import "./App.css";
import HomePage from "./pages/homepage/homePage"
import LoginPage from "./pages/loginpage/loginPage"
import { BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from './components/navbar/navbar'

function App() {
  return (
 <Router>
      <Navbar />
      <Route exact path = "/login" component={LoginPage}/>
      <Route exact path = "/" component={HomePage}/>
      
      
 </Router>
      
 
  );
}

export default App;

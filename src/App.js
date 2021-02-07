import "./App.css";
import HomePage from "./pages/homepage/homePage"
import LoginPage from "./pages/loginpage/loginPage"
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProfilePage  from "./pages/usrProfile/userprofile";
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <Router>
      <Route exact path="/login" component={LoginPage} />
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/userprofile" component={UserProfilePage} />
    </Router>
  );
}

export default App;

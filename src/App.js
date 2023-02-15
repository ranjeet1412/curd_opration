import "./App.css";
import Viewpost from "./Component/Viewpost";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AddEmployee from "./Component/AddEmployee";
import EditEmployee from "./Component/EditEmployee";
import Home from "./Component/Home";

function App() {
  return (
    // <div className="App">
    //  <Viewpost/>
    // </div>
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AddEmployee">AddEmployee</Link>
          </li>

          <li>
            <Link to="/EditEmployee">EditEmployee</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/AddEmployee" element={<AddEmployee />} />

          <Route path="/EditEmployee" element={<EditEmployee />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

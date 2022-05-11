/** @format */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Register } from "./components/Register/Register";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Create } from "./components/Create/Create";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/dashboard' exact element={<Dashboard />} />
          <Route path='/create' exact element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

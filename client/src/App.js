/** @format */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Register } from "./components/Register/Register";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Create } from "./components/Create/Create";
import { Blog } from "./components/Blog/Blog";
import { Myprojects } from "./components/MyProjects/Myprojects";
import { Profile } from "./components/Profile/Profile";
import { ForgotPassword } from "./components/ForgotPassword/ForgotPassword";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/dashboard' exact element={<Dashboard />} />
          <Route path='/create' exact element={<Create />} />
          <Route path='/blog' exact element={<Blog />} />
          <Route path='/dashboard/myprojects' exact element={<Myprojects />} />
          <Route path='/profile' exact element={<Profile />} />
          <Route path='/forgotpass' exact element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

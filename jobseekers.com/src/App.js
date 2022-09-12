import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import './App.css'
import Navbar from "./Components/common/navbar/Navbar";
import Footer from "./Components/common/footer/Footer";
import Login from "./Components/login/Login";
import JobsListing from "./Components/jobListing/JobsListing";
import Signup from "./Components/signup/Signup";
import Employee from "./Components/employee/Employee";
import Addjob from "./Components/ADD_JOB/Addjob";
import ProfileForm from "./Components/profile/ProfileForm";
import Admin from "./Components/protected_routes/Admin";
import User from "./Components/protected_routes/User"
import AppliedJobs from "./Components/appliedAndSavedJobs/AppliedJobs";
import SavedJobs from "./Components/appliedAndSavedJobs/SavedJobs";
import About from "./Components/about/About"
import JobsAdmin from "./Components/jobsAdmin/JobsAdmin";
function App() {

  return (
    <BrowserRouter>
   
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} /> {/* Public home page */}
        <Route path="/about" element={<About/>}/> 
        <Route path="/explorejobs" element={<User child={<JobsListing></JobsListing>}></User>} /> {/* List of jobs available */}
        <Route path="/user" element={<User child={<Employee></Employee>}></User>} />  {/* Users own profile */}
        <Route path="/login" element={<Login></Login>}/> {/* Public login page */}
        <Route path="/signup" element={<Signup></Signup>}/> {/* public signup page */}
        <Route path="/jobadmin" element={<Admin child={<JobsAdmin></JobsAdmin>}></Admin>}></Route>
        <Route path="/addjob" element={<Admin child={<Addjob></Addjob>}></Admin>}></Route> {/* Page for creating job */}
        <Route path="/updateprofile" element={<User child={<ProfileForm></ProfileForm>}></User>}></Route> {/* Page for updating users own profile */}
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
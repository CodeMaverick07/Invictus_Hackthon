import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SignIn from "./Pages/SignIn";

import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Companies from "./Pages/CompaniesPage/Companies";
import JobSeekerProfile from "./Components/JobSeekerProfile/JobSeekerProfile";

import EmployerProfile from "./Components/EmployerProfile";
import ProfilePage from "./Pages/Profile Page/ProfilePage";
import { ToastContainer } from "react-toastify";
import InternshipList from "./InternshipList/internships";
import "react-toastify/dist/ReactToastify.css";
import ProfileInfo from "./Pages/Info/ProfileInfo";
import Features from "./Pages/Features";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profileinfo" element={<ProfileInfo />} />
        <Route path="/companiesProfile" element={<Companies />} />
        <Route path="/jobs" element={<InternshipList />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/JobseekerProfile" element={<JobSeekerProfile />} />
        <Route path="/EmployerProfile" element={<EmployerProfile />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;

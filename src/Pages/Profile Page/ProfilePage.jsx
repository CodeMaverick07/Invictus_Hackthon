import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import JobSeekerProfile from "../../Components/JobSeekerProfile/JobSeekerProfile";
import EmployerProfile from "../../Components/EmployerProfile";
import ProfileInfo from "../Info/ProfileInfo";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const { userType } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        // Check if userType is not defined or an empty string, then redirect
        const jobSeekerData = JSON.parse(localStorage.getItem("JobseekerData"));
    const employerData = JSON.parse(localStorage.getItem("EmployerData"));

    if (jobSeekerData) {
      navigate("/JobseekerProfile");
    } else if (employerData) {
      navigate("/EmployerProfile");
    } else {
      navigate("/profileinfo");
    }
    }, [navigate]);

    return (
        <div className="profile-page">
            {userType === "" && <ProfileInfo />}
            {userType === "jobSeeker" && <JobSeekerProfile />}
            {userType === "employer" && <EmployerProfile />}
        </div>
    );
}

export default ProfilePage;

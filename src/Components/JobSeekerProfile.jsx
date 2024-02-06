import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function JobSeekerProfile() {
  const [profileData, setProfileData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
      try {
          // Retrieve job seeker profile data from localStorage
          const storedProfileData = localStorage.getItem("JobseekerData");

          if (storedProfileData) {
              // Parse the stored data if it exists
              const parsedProfileData = JSON.parse(storedProfileData);
              setProfileData(parsedProfileData);
              toast.success("Data loaded successfully");
          } else {
              toast.error("Data not found");
              navigate("/profileinfo");
          }
      } catch (error) {
          toast.error(
              "Error retrieving job seeker profile data from localStorage."
          );
      }
  }, [navigate]);
  return (
    <div>Hello</div>
  )
}

export default JobSeekerProfile
import { useState } from "react";
import { toast } from "react-toastify";
import {useUser} from "../../context/UserContext"
import { useNavigate } from "react-router-dom";

function JobSeekers() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setmobileNo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [institution, setInstitution] = useState("");
    const [currentStatus, setcurrentStatus] = useState("Student");
    const [fieldOfStudy, setfieldOfStudy] = useState("");
    const [graduationYear, setYear] = useState("");
    const [skills, setSkills] = useState("");
    const [certifications, setCerti] = useState("");
       const [resume, setResume] = useState("");
       const [portfolio, setPortfolio] = useState("");
        const [internshipStartMonth, setinternshipStartMonth] = useState("");
    const [internshipDuration, setDuration] = useState("");
    const [preferredLocation, setLoc] = useState("");
    const [remoteWorkPreferences, setRemote] = useState("No");
    const [linkedInLink, setLinkedin] = useState("");
    const [githubLink, setGithub] = useState("");
    const [LeetcodeLink, setLeetcode] = useState("");

           const { setUserType } = useUser();

           const navigate = useNavigate();

    async function handleSubmit(e){
       e.preventDefault();

       try {
        //    const response = await axios.post(
        //        "http://localhost:8000/api/v1/jobseeker/jobseekerprofile",
        //        {
        //            name,
        //            email,
        //            mobileNo,
        //            city,
        //            state,
        //            institution,
        //            currentStatus,
        //            fieldOfStudy,
        //            graduationYear,
        //            skills,
        //            certifications,
        //            resume,
        //            portfolio,
        //            internshipStartMonth,
        //            internshipDuration,
        //            preferredLocation,
        //            remoteWorkPreferences,
        //            linkedInLink,
        //            githubLink,
        //            LeetcodeLink,
        //        }
        //    );
        //    console.log("API Response:", response.data); // Log the entire response
        const ProfileData = {name,
                   email,
                   mobileNo,
                   city,
                   state,
                   institution,
                   currentStatus,
                   fieldOfStudy,
                   graduationYear,
                   skills,
                   certifications,
                   resume,
                   portfolio,
                   internshipStartMonth,
                   internshipDuration,
                   preferredLocation,
                   remoteWorkPreferences,
                   linkedInLink,
                   githubLink,
                   LeetcodeLink
                }

        //     const { _id } = response.data.data; // Extracting _id from the response

        // localStorage.setItem("jobSeekerId", _id);
            toast.success("Profile created successfully");
            setUserType("jobSeeker");
            localStorage.setItem("JobseekerData", JSON.stringify(ProfileData));
            navigate("/JobseekerProfile");
       } catch (error) {
           toast.error("Try after sometime");
           console.log(Error.message, error);
       }       
    }

    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label
                        for="name"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="John"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    ></input>
                </div>
                <div className="mb-2">
                    <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="john@gamil.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    ></input>
                </div>
                <div className="mb-2">
                    <label
                        for="mobile"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Mobile Number
                    </label>
                    <input
                        type="number"
                        id="mobile"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="8369xxxxx"
                        value={mobileNo}
                        onChange={(e) => setmobileNo(e.target.value)}
                        required
                    ></input>
                </div>
                <div className="mb-2 flex gap-5">
                    <div className="mb-2">
                        <label
                            for="city"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Mumbai"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className="mb-2">
                        <label
                            for="state"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            State
                        </label>
                        <input
                            type="text"
                            id="state"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Maharashtra"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        ></input>
                    </div>
                </div>
                <div className="mb-2 flex gap-5">
                    <div className="mb-2">
                        <label
                            for="college"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Institution Name
                        </label>
                        <input
                            type="text"
                            id="college"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="VESIT"
                            value={institution}
                            onChange={(e) => setInstitution(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className="mb-2">
                        <label
                            for="status"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Status
                        </label>
                        <select
                            for="status"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                            value={currentStatus}
                            onChange={(e) => {
                                setcurrentStatus(e.target.value);
                            }}
                        >
                            <option value="Student">Student</option>
                            <option value="Alumni">Alumini</option>
                            <option value="Applicant">Applicant</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="mb-2 flex gap-5">
                    <div className="mb-2">
                        <label
                            for="branch"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Field of Study
                        </label>
                        <input
                            type="text"
                            id="branch"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="CMPN"
                            value={fieldOfStudy}
                            onChange={(e) => setfieldOfStudy(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className="mb-2">
                        <label
                            for="goy"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Graduation of Year
                        </label>
                        <input
                            type="number"
                            id="goy"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="20xx"
                            value={graduationYear}
                            onChange={(e) => setYear(e.target.value)}
                            required
                        ></input>
                    </div>
                </div>
                <div className="mb-2 flex gap-5">
                    <div className="mb-2">
                        <label
                            for="skills"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Skills
                        </label>
                        <input
                            type="text"
                            id="skills"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="React "
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className="mb-2">
                        <label
                            for="certi"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Certification
                        </label>
                        <input
                            type="text"
                            id="certi"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="React "
                            value={certifications}
                            onChange={(e) => setCerti(e.target.value)}
                            required
                        ></input>
                    </div>
                </div>
                <div className="mb-2">
                    <label
                        for="duration"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Resume Link
                    </label>
                    <input
                        type="url"
                        id="duration"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="in months"
                        value={resume}
                        onChange={(e) => setResume(e.target.value)}
                        required
                    ></input>
                </div>
                <div className="mb-2">
                    <label
                        for="duration"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Portfolio Links
                    </label>
                    <input
                        type="url"
                        id="duration"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="in months"
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                        required
                    ></input>
                </div>
                <div className="mb-2">
                    <label
                        for="duration"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Internship Start month
                    </label>
                    <input
                        type="text"
                        id="duration"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="in months"
                        value={internshipStartMonth}
                        onChange={(e) =>
                            setinternshipStartMonth(e.target.value)
                        }
                        required
                    ></input>
                </div>

                <div className="mb-2">
                    <label
                        for="duration"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Internship Duration
                    </label>
                    <input
                        type="number"
                        id="duration"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="in months"
                        value={internshipDuration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                    ></input>
                </div>
                <div className="mb-2 flex gap-5">
                    <div className="mb-2">
                        <label
                            for="loc"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Prefered Location
                        </label>
                        <input
                            type="text"
                            id="loc"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Pune"
                            value={preferredLocation}
                            onChange={(e) => setLoc(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className="mb-2">
                        <label
                            for="status"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Remote Work
                        </label>
                        <select
                            for="status"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                            value={remoteWorkPreferences}
                            onChange={(e) => {
                                setRemote(e.target.value);
                            }}
                        >
                            <option value="Remote">Yes</option>
                            <option value="Asia">No</option>
                        </select>
                    </div>
                </div>
                <div className="mb-2">
                    <label
                        for="linkedin"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Linkedin Profile
                    </label>
                    <input
                        type="url"
                        id="linkedin"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Linkedin Profile Link"
                        value={linkedInLink}
                        onChange={(e) => setLinkedin(e.target.value)}
                        required
                    ></input>
                </div>
                <div className="mb-2">
                    <label
                        for="github"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Github Profile
                    </label>
                    <input
                        type="url"
                        id="github"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Github Profile Link"
                        value={githubLink}
                        onChange={(e) => setGithub(e.target.value)}
                        required
                    ></input>
                </div>
                <div className="mb-2">
                    <label
                        for="leetcode"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        LeetCode
                    </label>
                    <input
                        type="url"
                        id="leetcode"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="https/resume"
                        value={LeetcodeLink}
                        onChange={(e) => setLeetcode(e.target.value)}
                        required
                    ></input>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default JobSeekers;

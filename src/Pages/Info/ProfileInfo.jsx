import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import JobSeekers from "../../Components/forms/jobSeekers.jsx";
import Employer from "../../Components/forms/employer.jsx";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer.jsx";
// import { useNavigate } from "react-router-dom";
const ProfileInfo = () => {
    const [key, setKey] = useState("Applicant");


    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem("userInfo"));

    //     if (user) navigate("/docs-list");
    // }, [navigate]);
    return (
        <>
        <Header />
        <section className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h1 className=" py-4">Add your profile details</h1>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className={`mb-3 ${key === "Applicant" ? "bg-white" : ""}`}
                    fill
                >
                    <Tab eventKey="Applicant" title="Applicant">
                        <JobSeekers />
                    </Tab>
                    <Tab eventKey="Employer" title="Employer">
                        <Employer />
                    </Tab>
                </Tabs>
            </div>
        </section>
        <Footer />
        </>
    );
};

export default ProfileInfo;

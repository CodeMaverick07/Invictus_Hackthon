import Layout from "../../Components/Layout";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <Layout>
            <div className="about-us-container">
                <div className="about-us-content">
                    <div className="about-us-info">
                        <div className="about-us">About Us</div>
                        InternOasis stands at the forefront of redefining the
                        internship experience. In the intricate tapestry of
                        student aspirations and corporate needs, we have woven a
                        platform that transcends conventional boundaries. Our
                        commitment lies in providing students with personalized
                        internship opportunities that align seamlessly with
                        their ambitions while aiding companies in identifying
                        top-tier talent.
                        <br />
                        <br />
                        InternOasis is more than a platform; it is a commitment
                        to innovation, fostering connections that spark
                        professional growth. With an intuitive interface, an
                        advanced matchmaking algorithm, and a relentless pursuit
                        of improvement, InternOasis is your dedicated partner in
                        navigating the dynamic landscape of internships. Join us
                        on this transformative journey, where internships become
                        more than experiences; they become pivotal milestones in
                        your career path.
                    </div>
                    <div className="about-us-image">
                        <img
                            src="/AboutUs.svg"
                            alt=""
                            className="h-auto w-auto"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutUs;

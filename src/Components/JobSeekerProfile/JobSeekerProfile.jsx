import "./JobSeekerProfile.css";
import Footer from "../Footer"
import Header from "../Header/Header"

const profile = {
    name: "John Doe",
    email: "john.doe@example.com",
    mobileNo: "123-456-7890",
    city: "Anytown",
    state: "CA",
    institution: "Example University",
    currentStatus: "Student",
    fieldOfStudy: "Computer Science",
    graduationYear: 2023,
    skills: ["JavaScript", "Python", "Web Development"],
    certifications: ["Certified Developer", "AWS Associate"],
    resume: "https://example.com/resume.pdf",
    portfolio: "https://john-doe.github.io",
    internshipStartMonth: "June",
    internshipDuration: 3,
    preferredLocation: "Any City",
    remoteWorkPreferences: "Yes",
    linkedInLink: "https://www.linkedin.com/in/johndoe/",
    githubLink: "https://github.com/john-doe",
    LeetcodeLink: "https://leetcode.com/johndoe/",
};


function JobSeekerProfile() {
    return (
        <>
        <Header />
        <div className="profile-container">
            <div className="profile-info">
                <div className="profile-image">
                    <img
                        src="https://bookface-images.s3.amazonaws.com/small_logos/008e65b3fdfccde7a316a6c0911fd59301ff1025.png"
                        alt=""
                    />
                </div>
                <div className="profile-info-wrapper">
                    <div className="profile-name">{profile.name}</div>
                    <div className="profile-contact">
                        <div className="profile-email">✉️{profile.email}</div>
                        <div className="profile-mobile">
                            📱{profile.mobileNo}
                        </div>
                    </div>
                    <div className="profile-location">
                        📍{profile.city}, {profile.state}
                    </div>
                    <div className="profile-desc">
                        Never take notes again with the #1 AI Meeting Assistant
                    </div>
                    <div className="profile-skills">
                        <div className="profile-title-1">Skills : </div>
                        {profile.skills.map((skill) => (
                            <div className="skill" key={skill}>
                                <div className="skill-name">{skill}</div>
                            </div>
                        ))}
                    </div>
                    <div className="profile-cert">
                        <div className="profile-title-1">Certifications : </div>
                        {profile.certifications.map((cert) => (
                            <div className="certifications" key={cert}>
                                <div className="cert-name">{cert}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="profile-content">
                <div className="profile-field-wrapper">
                    <div className="field-title">Institution</div>
                    <div className="profile-institution profile-field">
                        {profile.institution}
                    </div>
                </div>
                <div className="profile-field-wrapper">
                    <div className="field-title">Current Status</div>
                    <div className="profile-current-status profile-field">
                        {profile.currentStatus}
                    </div>
                </div>
                <div className="profile-field-wrapper">
                    <div className="field-title">Field Of Study</div>
                    <div className="profile-fieldofstudy profile-field">
                        {profile.fieldOfStudy}
                    </div>
                </div>
                <div className="profile-field-wrapper">
                    <div className="field-title">Graduation Year</div>
                    <div className="profile-grad-year profile-field">
                        {profile.graduationYear}
                    </div>
                </div>
                <div className="profile-field-wrapper">
                    <div className="field-title">Start Month</div>
                    <div className="profile-start-month profile-field">
                        {profile.internshipStartMonth}
                    </div>
                </div>
                <div className="profile-field-wrapper">
                    <div className="field-title">Duration</div>
                    <div className="profile-duration profile-field">
                        {profile.internshipDuration}
                    </div>
                </div>
                <div className="profile-field-wrapper">
                    <div className="field-title">Preferred Location</div>
                    <div className="profile-preferred-location profile-field">
                        {profile.preferredLocation}
                    </div>
                </div>
                <div className="profile-field-wrapper">
                    <div className="field-title">Remote Work Preferences</div>
                    <div className="profile-remote-work profile-field">
                        {profile.remoteWorkPreferences}
                    </div>
                </div>

                <div className="profile-field-wrapper">
                    <div className="field-title">
                        Links :<br />
                    </div>
                    <div className="profile-links">
                        <div className="profile-resume">
                            <a href={profile.resume}>{profile.resume}</a>
                        </div>
                        <div className="profile-portfolio">
                            <a href={profile.portfolio}>{profile.portfolio}</a>
                        </div>
                        <div className="profile-linkedInLink">
                            <a href={profile.linkedInLink}>
                                {profile.linkedInLink}
                            </a>
                        </div>
                        <div className="profile-githubLink">
                            <a href={profile.githubLink}>
                                {profile.githubLink}
                            </a>
                        </div>
                        <div className="profile-leetcodeLink">
                            <a href={profile.LeetcodeLink}>
                                {profile.LeetcodeLink}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className="update btn">Update</button>
                <button className="logout btn">Logout</button>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default JobSeekerProfile;

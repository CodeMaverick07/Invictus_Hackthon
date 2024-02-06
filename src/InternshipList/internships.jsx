import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";
import { Modal, Button } from "react-bootstrap";
import JobApplication from "../Components/forms/jobApplication";
import companies from "../utils/data";


function InternshipList() {
    return(
        <>
        <Header />
        <div className=" my-5 flex flex-wrap gap-5 justify-center">
            {companies.map((company) => (
                <InternShip
                    logo={company.logo}
                    role={company.roleOffered}
                    company={company.name}
                    location={company.location}
                    duration={company.duration}
                    stipend={company.salary}
                    stack={company.skills}
                />
            ))}
        </div>
        <Footer />
        </>
    );
}

function InternShip(props){
    const {logo,role,company,location,duration,stipend} = props;
    const stack = props.stack.join(", ");

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div>
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-wrap gap-5 p-2 mb-2 border-b-4 border-gray-600">
                    <div className="rounded-lg">
                        <img src={`${logo}`} className="w-20 h-20"></img>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h5 class="mb-1 text-lg font-medium text-gray-900 ">
                            {role}
                        </h5>
                        <a href="#" className="no-underline">
                            <h5 class="mb-2 text-sm font-semibold tracking-tight text-gray-900 ">
                                {company}
                            </h5>
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap gap-16 mt-4 justify-start">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <i class="fa-solid fa-location-dot m-auto text-2xl"></i>
                        <h6 class="text-xl text-gray-500 m-auto">{location}</h6>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <i className="fa-regular fa-calendar m-auto text-2xl"></i>
                        <h6 className="text-xl text-gray-500 m-auto">
                            {duration} months
                        </h6>
                    </div>
                </div>
                <div className="flex flex-wrap gap-10 mt-4 mb-4 justify-start">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <i class="fa-solid fa-layer-group m-auto text-2xl"></i>
                        <h6 class="text-lg text-gray-500 m-auto">{stack}</h6>
                    </div>
                </div>
                <div className="flex flex-wrap gap-10 mt-4 mb-4 justify-start">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <i class="fa-solid fa-dollar-sign m-auto text-2xl"></i>
                        <h6 class="text-lg text-gray-500 m-auto">{stipend}</h6>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={handleShow}
                    class="text-white gap-3 bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center "
                >
                    <i class="fa-solid fa-address-card m-auto text-2xl mr-5"></i>
                    <h6 className="text-lg text-white m-auto">Apply</h6>
                </button>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Apply for {role} at {company}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Integrate your JobApplication component here */}
                        <JobApplication />
                    </Modal.Body>
                    {/* You can keep the existing Modal.Footer or customize it as needed */}
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}


export default InternshipList;
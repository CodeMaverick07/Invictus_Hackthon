import "./Companies.css";
import companiesJSON from "../../utils/sampleCompanies.json";
import { Button } from "react-bootstrap";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";

function Companies() {
    return (
        <>
        <Header />
        <div className="cards-container">
            {companiesJSON.map((item) => (
                <div className="company-card rounded-lg divide-y-2">
                    <div className="company-info">
                        <div className="company-logo">
                            <img
                                src="https://t4.ftcdn.net/jpg/02/84/25/75/360_F_284257577_cSLO6IMF6Zcm9EQwdYSONsttvGgRzv8R.jpg"
                                alt=""
                            />
                        </div>
                        <div className="company-name">{item.name}</div>
                        <div className="company-info-container">
                            <div className="company-location">
                                📍{item.location}
                            </div>
                            <div className="company-category">
                                {item.category}
                            </div>
                        </div>
                    </div>
                    <div className="company-content">
                        <div className="company-description">
                            {item.description}
                        </div>
                        <Button className="company-website" type="">
                            <a href={item["website-link"]} target="blank">
                                Website
                            </a>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
        <Footer />
        </>
    );
}

export default Companies;

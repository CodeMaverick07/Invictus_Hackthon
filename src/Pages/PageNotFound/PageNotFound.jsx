import Layout from "../../Components/Layout";
import "./PageNotFound.css";

const PageNotFound = () => {
    return (
        <Layout>
            <div className="container-404">
                <div className="error">ERROR</div>
                <img
                    className="logo-404 h-72 w-auto"
                    src="/Error404.svg"
                    alt=""
                />
                <br />
                <div>Looks like you're lost...</div>
                <div>
                    Go back to our <a href="/">homepage</a>
                </div>
            </div>
        </Layout>
    );
};

export default PageNotFound;

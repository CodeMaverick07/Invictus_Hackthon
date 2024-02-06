/* eslint-disable react/prop-types */
import Header from "./Header/Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div>
            <Header />

            <div className="">{children}</div>

            <Footer />
        </div>
    );
}

export default Layout;

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import Header from "./componentes/Header";
import Nav from "./componentes/Nav";
import Main from "./componentes/Main";
import Table from "./componentes/Table";
import Section from "./componentes/Section";
import Footer from "./componentes/Footer";

function App() {
    useEffect(() => {
        document.title = "Feriados en Chile";
    }, []);
    return (
        <>
            <Header />
            <Nav />
            <Main />
            <Table />
            <Section />
            <Footer />
            <div className="social-icons">
                <InstagramIcon />
                <FacebookOutlinedIcon />
                <WhatsAppIcon />
            </div>
        </>
    );
}

export default App;

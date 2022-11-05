import { Route, Routes } from "react-router-dom";

import Nav from "./pages/Nav";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Interests from "./pages/Interests";
import Awards from "./pages/Awards";

function App() {
    return (
        <>
            <Nav />
            <div className="container-fluid p-0">
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/interests" element={<Interests />} />
                    <Route path="/awards" element={<Awards />} />
                    <Route path="*" element={<About />} />
                </Routes>
            </div>
        </>
    );
}

export default App;

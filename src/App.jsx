import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Contact } from "./components/pages/Contact";
import { Company } from "./components/pages/Company";
import { NewProject } from "./components/pages/NewProject";
import { Navbar } from "./components/container/Navbar";
import { Footer } from "./components/container/Footer";
import { Projects } from "./components/pages/Projects";

import MainStyle from "./styles/MainStyle";
import { GlobalStyles } from "./styles/Global";

export const App = () => {
  // return <div>teste</div>;
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <MainStyle>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </MainStyle>
      <Footer />
    </BrowserRouter>
  );
};

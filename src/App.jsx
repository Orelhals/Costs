import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Contact } from "./components/pages/Contact";
import { Company } from "./components/pages/Company";
import { NewProject } from "./components/pages/NewProject";

export const App = () => {
  // return <div>teste</div>;
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
    </BrowserRouter>
  );
};

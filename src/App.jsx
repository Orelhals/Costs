import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { Streamers } from "./pages/Streamers";
import { MirasTroll } from "./pages/MirasTroll";

// components
import { Header, Footer } from "./components";

import { GlobalStyles } from "./styles/Global";

export const App = () => {
  // return <div>teste</div>;
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/streamers" element={<Streamers />} />
        <Route path="/mirastroll" element={<MirasTroll />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

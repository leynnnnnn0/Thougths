import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Content from "./pages/Content/Content";

import "./App.css"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contents" element={<Content />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
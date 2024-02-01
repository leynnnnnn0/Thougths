import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
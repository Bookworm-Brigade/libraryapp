import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Landing } from "./pages/Landing";
import { Books } from "./pages/Books";
import Categories from "./pages/Categories";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/books" element={<Books />} />
           <Route path="/categories" element={<Categories />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

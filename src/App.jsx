import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Landing } from "./pages/Landing";
import Books from "./pages/Books";
import { SingleBook } from "./pages/SingleBook";
import {} from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/books" element={<Books />} />
          <Route path="/singlebook" element={<SingleBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

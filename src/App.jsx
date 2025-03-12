import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Landing } from "./pages/Landing";
import { Books } from "./pages/Books";
import AddBook  from "./pages/AddBook";
import { SingleBook } from "./pages/SingleBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/books" element={<Books />} />
          <Route path="/singlebook" element={<SingleBook />} />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  } from "react-router";
import { Landing } from "./pages/Landing";
import Books from "./pages/Books";
import { SingleBook } from "./pages/SingleBook";
import Categories from "./pages/Categories";
import {} from "react-router";
// const router = createBrowserRouter([{ path: "/books", element: <Books /> }]);
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/books" element={<Books />} />
          <Route path="/singlebook" element={<SingleBook />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>

      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;

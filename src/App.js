import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./View/Home/Index";
import Banner from "./View/Home/Banner";
import OurMenu from "./View/Home/OurMenu";
import BookTable from "./View/Home/BookTable";
import Profile from "./View/Profile/Index";
import Comment from "./View/Profile/Comment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/ourmenu" element={<OurMenu />} />
            <Route path="/booktable" element={<BookTable />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/comment" element={<Comment />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

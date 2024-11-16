import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Saved />} />
        </Routes>
      }
    </div>
  );
};

export default App;

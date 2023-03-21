import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SignIn from "./components/pages-components/auth/signIn/SignIn";
import SignUp from "./components/pages-components/auth/signUp/SignUp";
import Navbar from "./components/shared-components/Navbar/Navbar";
import Home from "./components/pages-components/Home/Home";
import Container from "./components/shared-components/container/Container";
import Footer from "./components/shared-components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;

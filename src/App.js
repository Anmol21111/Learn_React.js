import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Form from "./Components/Form";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const elm = "Tanya";

function App() {
  // This useAlert props hooks is use for {adding Alert}  ///
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  // This useState props hooks function is use for {Enable Dark Mode}  ////

  const [mode, setMode] = useState("light");

  const tooglemode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#cfd4d1";
      showAlert("light mode has been enable", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Google.com"
          link="Private Link"
          mode={mode}
          tooglemode={tooglemode}
        />
        <Alert alert={alert} />
        <Routes>
        <Route element={<About />} path='about' />
        <Route element={<Form />}  path="form" />
        <Route element={<Cards />} path="cards"  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

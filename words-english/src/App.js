import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LoginApp from "./routes/LoginApp";
import Main from "./routes/Main";
import Syllabus from "./routes/Syllabus";
import MenuApp from "./component/MenuApp";
import { useEffect } from "react";

function App() {
  let navigate = useNavigate();

  useEffect(() => {
    const token= localStorage.getItem("toke");
    token ? navigate("/") : navigate("/login") ;
  }, []); 

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MenuApp />}>
          <Route path="" element={<Main />} />
          <Route path="Syllabus" element={<Syllabus />}/>
        </Route>
        <Route path="/login" element={<LoginApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

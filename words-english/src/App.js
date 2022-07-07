import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginApp from "./routes/LoginApp";
import Main from "./routes/Main";
import Syllabus from "./routes/Syllabus";
import MenuApp from "./component/MenuApp";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginApp />} />
        <Route path="/" element={<MenuApp />}>
          <Route path="" element={<Main />} />
          <Route path="Syllabus" element={<Syllabus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./routes/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1>Hol</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

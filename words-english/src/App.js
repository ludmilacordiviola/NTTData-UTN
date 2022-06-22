import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>
        Aca el menu
      </h1>
      <Outlet />
      <h2>
        Aca el Footer
      </h2>
    </>
  );
}

export default App;

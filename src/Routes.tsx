
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";


export default function RoutesComponent() {
  return (
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="page1" element={<Pagina1 />} />
        <Route path="page2" element={<Pagina2 />} />
      </Routes>
  );
}
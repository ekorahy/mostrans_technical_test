import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import CharacterByLocation from "./pages/CharacterByLocation";

export default function App() {
  return (
    <div>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<CharacterDetail />} />
          <Route path="/location" element={<CharacterByLocation />} />
        </Routes>
      </main>
    </div>
  );
}

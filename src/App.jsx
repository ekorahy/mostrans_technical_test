import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import CharacterByLocation from "./pages/CharacterByLocation";
import Navigation from "./components/molecules/Navigation";

export default function App() {
  return (
    <div>
      <header className="container fixed left-0 right-0 top-0 mx-auto">
        <Navigation />
      </header>
      <main className="container mx-auto mt-20 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<CharacterDetail />} />
          <Route path="/location" element={<CharacterByLocation />} />
        </Routes>
      </main>
    </div>
  );
}

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import CharacterByLocation from "./pages/CharacterByLocation";
import Navigation from "./components/molecules/Navigation";
import PageNotFound from "./components/atoms/PageNotFound";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container fixed left-0 right-0 top-0 z-50 mx-auto">
        <Navigation />
      </header>
      <main className="container mx-auto mt-20 flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<CharacterDetail />} />
          <Route path="/location" element={<CharacterByLocation />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
      <footer className="p-4 text-center">
        <p>&copy; 2024 - Rick And Morty</p>
      </footer>
    </div>
  );
}

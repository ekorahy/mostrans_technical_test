import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import CharacterByLocation from "./pages/CharacterByLocation";
import Navigation from "./components/molecules/Navigation";
import PageNotFound from "./components/atoms/PageNotFound";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container fixed left-0 right-0 top-0 mx-auto z-50">
        <Navigation />
      </header>
      <main className="container mx-auto flex-grow mt-20 p-4">
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

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

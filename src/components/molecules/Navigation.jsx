import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between border-b bg-white p-4">
      <Link to="/">
        <img className="h-10" src="/logo.svg" alt="logo image" />
      </Link>
      <Link className="flex items-center gap-2" to="/location">
        <GoLocation /> <span className="hidden sm:block">Location</span>
      </Link>
    </nav>
  );
}

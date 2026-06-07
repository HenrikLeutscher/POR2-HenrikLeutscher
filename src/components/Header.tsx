import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <nav className="flex text-center container mx-auto px-4 gap-5">
          <Link to="/" className="NavElement">
            Home
          </Link>
        </nav>
      </nav>
    </header>
  );
}

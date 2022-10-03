import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white px-4 py-2 fixed top-0 left-0 right-0 z-50">
      <h1 className="text-cente text-[32px] font-bold text-center">Post crud with axios</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

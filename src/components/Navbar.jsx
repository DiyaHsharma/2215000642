import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-indigo-600 p-4 text-white flex gap-4">
    <Link to="/">Feed</Link>
    <Link to="/top-users">Top Users</Link>
    <Link to="/trending-posts">Trending Posts</Link>
  </nav>
);

export default Navbar;

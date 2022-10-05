import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <ul>
      <Link to="/" className="link">
        <li>Home</li>
      </Link>
      <Link to="/singleton" className="link">
        <li>Singleton</li>
      </Link>
      <Link to="/provider" className="link">
        <li>Provider</li>
      </Link>
    </ul>
  );
};

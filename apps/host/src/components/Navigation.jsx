import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="main-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/remote1">Remote 1</Link></li>
        <li><Link to="/remote2">Remote 2</Link></li>
      </ul>
    </nav>
  );
}
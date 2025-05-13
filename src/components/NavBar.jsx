import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // ✅ Ensure this is present

export default function NavBar() {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

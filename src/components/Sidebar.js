import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaList, FaUserInjured, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css"; // make sure you have this CSS file

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Get user role from localStorage
  const userRole = localStorage.getItem("userRole");

  // Determine dashboard path based on user role
  let dashboardPath = "/dashboard"; // default fallback
  if (userRole === "admin") {
    dashboardPath = "/admin-dashboard";
  } else if (userRole === "donor") {
    dashboardPath = "/donor-dashboard";
  } else if (userRole === "recipient") {
    dashboardPath = "/recipient-dashboard";
  }

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">OrganHub</h3>
      <nav>
        <ul>
          <li className={isActive(dashboardPath) ? "active" : ""}>
            <Link to={dashboardPath}><FaTachometerAlt /> Dashboard</Link>
          </li>
          <li className={isActive("/donors") ? "active" : ""}>
            <Link to="/donors"><FaList /> Donor List</Link>
          </li>
          <li className={isActive("/recipients") ? "active" : ""}>
            <Link to="/recipients"><FaUserInjured /> Recipient List</Link>
          </li>
          <li>
            <Link to="/" style={{ color: "crimson" }}><FaSignOutAlt /> Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Search,
  Goal,
  Lightbulb,
  Settings,
  Box,
  ChevronDown,
} from "lucide-react";
import "./Navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const navbarElements = [
    {
      name: "Inicio",
      icon: <Home />,
      link: "/antiracist-skeleton-app/",
    },
    {
      name: "Empathize",
      icon: <Search />,
      subitems: [
        {
          name: "Sesión 1",
          link: "/antiracist-skeleton-app/sesion1",
        },
        {
          name: "Sesión 2",
          link: "/antiracist-skeleton-app/sesion2",
        },
        {
          name: "Sesión 3",
          link: "/antiracist-skeleton-app/sesion3",
        },
      ],
    },
    {
      name: "Define",
      icon: <Goal />,
      subitems: [
        {
          name: "Sesión 4",
          link: "/antiracist-skeleton-app/sesion4",
        },
        {
          name: "Sesión 5",
          link: "/antiracist-skeleton-app/sesion5",
        },
      ],
    },
    {
      name: "Ideate",
      icon: <Lightbulb />,
      subitems: [
        {
          name: "Sesión 6",
          link: "/antiracist-skeleton-app/sesion6",
        },
        {
          name: "Sesión 7",
          link: "/antiracist-skeleton-app/sesion7",
        },
      ],
    },
    {
      name: "Development",
      icon: <Settings />,
      subitems: [],
    },
    {
      name: "Prototype",
      icon: <Box />,
      subitems: [],
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/antiracist-skeleton-app/">MyApp</Link>
        </div>
        <ul className="navbar-menu">
          {navbarElements.map((item, index) => (
            <li key={index} className="navbar-item">
              <div className="items-information">
                <Link
                  to={item.link || "#"}
                  className={`navbar-link ${item.subitems ? "navbar-link--no-hover" : ""}`}
                >
                  <div className="information-content">
                    <span className="items-icon">{item.icon}</span>
                    <span
                      className="items-text"
                      onClick={(e) => toggleSubmenu(index, e)}
                    >
                      {item.name}
                    </span>
                  </div>
                </Link>
                {item.subitems && (
                  <span
                    className="items-chevron"
                    onClick={(e) => toggleSubmenu(index, e)}
                    style={{ cursor: "pointer" }}
                  >
                    <ChevronDown />
                  </span>
                )}
              </div>
              {item.subitems && (
                <ul
                  className={`navbar-submenu ${openSubmenus[index] ? "open" : ""}`}
                >
                  {item.subitems.map((subitem, subindex) => (
                    <li key={subindex} className="navbar-subitem">
                      <Link to={subitem.link} className="navbar-link">
                        <span
                          className="items-span-text"
                          style={{ transitionDelay: `${subindex * 0.2}s` }}
                        >
                          {subitem.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

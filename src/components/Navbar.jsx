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
import { motion, useScroll, useTransform } from "framer-motion";
import Empathize from "../pages/Empathize";
import Define from "../pages/Define";
import Ideation from "../pages/Ideation";
import Development from "../pages/Development";
import Prototype from "../pages/Prototype";

export default function Navbar() {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"],
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"],
  );

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
      link: "/antiracist-skeleton-app/empathize",
      element: <Empathize />,
    
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
      name: "Ideation",
      icon: <Lightbulb />,
      link: "/antiracist-skeleton-app/ideation",
      element: <Ideation />,
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
      link: "/antiracist-skeleton-app/development",
      element: <Development />,
      subitems: [
        {
          name: "Sesión 8",
          link: "/antiracist-skeleton-app/sesion8",
        },
        {
          name: "Sesión 9",
          link: "/antiracist-skeleton-app/sesion9",
        },
        {
          name: "Sesión 10",
          link: "/antiracist-skeleton-app/sesion10",
        },
        {
          name: "Sesión 11",
          link: "/antiracist-skeleton-app/sesion11",
        },
        {
          name: "Sesión 12",
          link: "/antiracist-skeleton-app/sesion12",
        },
      ],
    },
    {
      name: "Prototype",
      icon: <Box />,
      link: "/antiracist-skeleton-app/prototype",
      element: <Prototype />,
      subitems: [],
    },
  ];

  return (
    <motion.nav className="navbar" style={{ backgroundColor, backdropFilter }}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/antiracist-skeleton-app/">MyApp</Link>
        </div>
        <ul className="navbar-menu">
          {navbarElements.map((item, index) => (
            <li key={index} className="navbar-item">
              <div className="items-information">
                <Link to={item.link || "#"} className="navbar-link">
                  <div className="information-content">
                    <span className="items-text">{item.name}</span>
                  </div>
                </Link>
                {item.subitems && (
                  <span
                    className="items-chevron"
                    onClick={(e) => toggleSubmenu(index, e)}
                    style={{ cursor: "pointer" }}
                  >
                    <Link to="#" className="navbar-link">
                      <ChevronDown />
                    </Link>
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
    </motion.nav>
  );
}

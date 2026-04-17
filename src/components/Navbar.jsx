import { Link } from "react-router-dom";
import { Home, Search, Goal, Lightbulb, Settings, Box } from "lucide-react";
import "./Navbar.scss";

export default function Navbar() {
  const navbarElements = [
    {
      name: "Inicio",
      icon: <Home />,
      link: "/",
    },
    {
      name: "Empathize",
      icon: <Search />,
      subitems: [
        {
          name: "Acerca de",
          link: "/about",
        },
      ],
    },
    {
      name: "Define",
      icon: <Goal />,
      subitems: [
        {
          name: "Acerca de",
          link: "/services",
        },
      ],
    },
    {
      name: "Ideate",
      icon: <Lightbulb />,
      subitems: [
        {
          name: "Acerca de",
          link: "/contact",
        },
      ],
    },
    {
      name: "Development",
      icon: <Settings />,
      subitems: [
        {
          name: "Acerca de",
          link: "/resources",
        },
      ],
    },
    {
      name: "Prototype",
      icon: <Box />,
      subitems: [
        {
          name: "Acerca de",
          link: "/about",
        },
      ],
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">MyApp</Link>
        </div>
        <ul className="navbar-menu">
          {navbarElements.map((item, index) => (
            <li key={index} className="navbar-item">
                <Link to={item.link || "#"} className="navbar-link">
                  <span className="items-icon">{item.icon}</span>
                  <span className="items-text">{item.name}</span>
                  <input type="checkbox" id={`submenu-toggle-${index}`} className="submenu-toggle" />  
                </Link>
                {item.subitems && (
                  <ul className="navbar-submenu">
                    {item.subitems.map((subitem, subindex) => (
                      <li key={subindex} className="navbar-subitem">
                        <Link to={subitem.link} className="navbar-link">
                          <span>{subitem.name}</span>
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

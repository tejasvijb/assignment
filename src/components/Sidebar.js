import { SidebarData } from "./SidebarData";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    let activeStyle = {
        display: "block",
        background:  '#293846',
        fontWeight: 'bold',
        borderLeft: '3px solid green'
      }

  return (
    <>
      <div className="sidebar">
        <nav>
          <ul className="sidebarList">
            {SidebarData.map((item, key) => (
              <NavLink
                key={key}
                to={item.link}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <li className="sidebarItem">
                  <div className="sidebarIcon">{item.icon}</div>
                  <div className="sidebarTitle">{item.title}</div>
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>

     
    </>
  );
}

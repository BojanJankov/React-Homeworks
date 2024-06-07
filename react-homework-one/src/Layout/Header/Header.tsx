import { NavLink } from "../../interfeces/navlink";
import "./Header.css";
import Navbar from "../../Components/Navbar/Navbar";

interface HeaderProps {
  title: string;
  navLink: NavLink[];
}

function Header({ title, navLink }: HeaderProps) {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <Navbar linkData={navLink} />
    </header>
  );
}

export default Header;

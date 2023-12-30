import Link from "next/link";
import classes from "./Navbar.module.css";

const NavBar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Todos App</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Show Todos</Link>
          </li>
          <li>
            <Link href="/add-todos">Add Todos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

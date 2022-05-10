import './App.css';
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/hello">Hello</Link> |{" "}
        <Link to="/hello/world">Hello world</Link>
      </nav>
      <Outlet />
    </div>
  );
}

import logo from "../../assets/logo.png";

import "./styles.css";
export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" />
      <h1>Ignite Feed</h1>
    </header>
  );
}
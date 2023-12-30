import "../App.css";
import Button from "./Button";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <p>Logo</p>
      </div>

      <div>
        <Button classname="btn" text="Sign up" />
      </div>
    </div>
  );
}

export default Navbar;

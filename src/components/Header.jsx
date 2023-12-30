import Button from "./Button";
import Input from "./Input";
import "../App.css";

const Header = ({ src, alt }) => {
  return (
    <div className="header">
      <h2 className="header-heading">
        Generate more leads with a <br />
        professional landing page!
      </h2>
      <Input />
      <Button text="Submit" />
    </div>
  );
};

export default Header;

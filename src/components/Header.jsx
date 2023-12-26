import { GiSittingDog } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div>
      <header className="header-class">
        <div>
          <Link to="/" className="link-styles">
            <GiSittingDog className="dog-icon" />
            <span>{title}</span>
          </Link>
        </div>
        <div>
          <a
            href="https://dog.ceo/dog-api/"
            className="link-styles"
            target="_blank"
          >
            API Source
          </a>
          <Link to="/AllDogs" className="link-styles">
            All Dogs
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;

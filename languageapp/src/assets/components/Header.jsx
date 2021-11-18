import "./Header.scss";
import logo from "../images/logo10.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img className="logo" src={logo} alt="Логотип приложения" />
        <p className="header_phrase">
          Чтобы попасть в Хогвардс - надо знать английский язык!
        </p>
      </div>
      <div className="header_buttons">
        <button>Traning</button>
        <button>Добавить слово</button>
      </div>
    </div>
  );
};

export default Header;

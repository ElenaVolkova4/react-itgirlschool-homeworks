import "./Header.scss";
import logo from "../images/logo10.png"


const Header = () => {
  return <div className="header">
    <img className="logo" src={logo} alt="Логотип приложения"/>
    <p>Чтобы попасть в Хогвардс - надо знать английский язык!</p>
    <div>Traning</div>
    <button>Добавить слово</button>
  </div>;
 }

 export default Header;
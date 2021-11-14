import "./Header.scss";
import logo from "../images/logo3.jpeg"

const Header = () => {
  return <div className="header">
    <img src={logo} alt="Логотип"/>
    <p>Чтобы попасть в Хогвардс - надо знать английский язык!</p>
    <div>Выбрать категорию</div>
    <div>Добавить слово</div>
  </div>;
 }

 export default Header;
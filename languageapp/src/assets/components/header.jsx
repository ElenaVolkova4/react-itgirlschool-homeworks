import "./Header.scss";
// import logo from "../images/logo5.jpg"
import logo from "../images/logo10.png"


const Header = () => {
  return <div className="header">
    <img className="logo" src={logo} alt="Логотип"/>
    <p>Чтобы попасть в Хогвардс - надо знать английский язык!</p>
    <div>Выбрать категорию</div>
    <button>Добавить слово</button>
  </div>;
 }

 export default Header;
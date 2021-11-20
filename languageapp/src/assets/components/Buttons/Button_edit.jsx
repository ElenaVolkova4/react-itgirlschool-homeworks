import './Button_actions.scss';
import './Button_edit.scss';

const ButtonEdit = props => {
  return (
    <div className="buttonEdit button_actions" onClick={props.onClick}>
      &#128396;
    </div>
  );
};

export default ButtonEdit;

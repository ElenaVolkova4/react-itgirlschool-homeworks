import './Button_actions.scss';
import './Button_edit.scss';

const ButtonSave = props => {
  return (
    <div
      className="buttonSave button_actions"
      onClick={props.onClick}
      title="сохранить"
    >
      &#9989;
    </div>
  );
};

export default ButtonSave;

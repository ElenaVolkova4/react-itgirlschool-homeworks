import './Button_actions.scss';
import './Button_delete.scss';

const ButtonDelete = props => {
  return (
    <div
      className="buttonDelete button_actions"
      onClick={props.onClick}
      title="удалить"
    >
      &#10060;
    </div>
  );
};

export default ButtonDelete;

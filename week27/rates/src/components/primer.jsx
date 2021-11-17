import React, { useState } from 'react'; //useState это хук

const Example = (props) => {
    const [checked, setChecked] = useState(props.checked || false); //это исходное состояние

    const handleChange = () => { //функция для обновления состояния
        setChecked(!checked);
    };
    
    return (
        <div className="React__checkbox">
            <label>
                <input
                    type="checkbox"
                    className="React__checkbox--input"
                    checked={checked}
                    onChange={handleChange}
                />
                <span
                    className="React__checkbox--span"
                />
            </label>
        </div>
    );

}
export default Example;
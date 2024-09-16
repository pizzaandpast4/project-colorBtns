/* eslint-disable react/prop-types */

const ColorButton = ({ text, onClick, btnClass, style }) => {
    return (
        <button className={btnClass} onClick={onClick} style={style}>
            {text}
        </button>
    );
};

export default ColorButton;
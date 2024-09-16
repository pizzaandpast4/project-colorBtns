import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorButton from './components/ColorButton'; 
import './App.css';

const App = () => {
    const [clickedButtons, setClickedButtons] = useState({
        button1: false,
        button2: false,
        button3: false,
        button4: false,
    });
    const [lastClickedButton, setLastClickedButton] = useState(null); 
    const [buttonColors, setButtonColors] = useState({}); 

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const changeColor = (buttonKey) => {
        if (!clickedButtons[buttonKey] || lastClickedButton !== buttonKey) {
            let randomBodyColor = getRandomColor();
            let randomButtonColor;

            do {
                randomButtonColor = getRandomColor();
            } while (randomButtonColor === randomBodyColor);

            document.body.style.backgroundColor = randomBodyColor; 
            setButtonColors((prev) => ({ ...prev, [buttonKey]: randomButtonColor })); 
            setClickedButtons((prev) => ({ ...prev, [buttonKey]: true }));
            setLastClickedButton(buttonKey); 
        }
    };

    const buttons = [
        { text: "Button 1", className: "btn btn-primary", key: "button1" },
        { text: "Button 2", className: "btn btn-success", key: "button2" },
        { text: "Button 3", className: "btn btn-danger", key: "button3" },
        { text: "Button 4", className: "btn btn-warning", key: "button4" },
    ];

    return (
        <div className="button-container">
            {buttons.map(({ text, className, key }) => (
                <ColorButton
                    key={key}
                    text={text}
                    onClick={() => changeColor(key)}
                    btnClass={className}
                    style={{ backgroundColor: buttonColors[key], fontSize: '20px', padding: '15px 30px' }} 
                />
            ))}
        </div>
    );
};

export default App;
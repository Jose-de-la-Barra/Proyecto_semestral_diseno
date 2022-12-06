import React, { useState } from 'react';
import { Profile } from './Profile';

export const Home = () => {

    const [inputText, setInputText] = useState('');
    const [savedDataN, setSavedDataN] = useState(false);
    const [savedDataCF, setSavedDataCF] = useState(false);

    const handleInputChange = (e) => {
        const text = e.target.value
        setInputText(text);
        console.log(inputText);

        if(text === '') {
            setSavedDataN(false);
        }

    }
    const handleInputChange1 = (e) => {
        const text = e.target.value
        setInputText(text);
        console.log(inputText);

        if(text === '') {
            setSavedDataN(false);
        }

    }

    const saveData = () => {
        localStorage.setItem('nombre', inputText);
        setSavedDataN(true);
        localStorage.setItem('comida', inputText);
        setSavedDataCF(true);
    }

    return (
        <div className = 'container'>
            <input 
                className = 'input'
                onChange = { handleInputChange }
                placeholder = 'Ingresa tu nombre!'
            />
            <button
                className = 'button'
                onClick = { saveData }
            >
                Enviar!
            </button>

            {  <Profile /> }

        </div>
    )
}

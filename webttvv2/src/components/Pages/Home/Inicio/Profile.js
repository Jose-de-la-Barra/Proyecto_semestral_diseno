import React, { useEffect, useState } from 'react'

export const Profile = () => {

    const [nombre, setNombre] = useState('');
    const [comida, setComida] = useState('');

    const getData = () => {
        return localStorage.getItem('nombre');
                localStorage.getItem('comida');
    }

    useEffect(() => {
        setNombre(getData());
    }, []);

    return (
        <div className='Home-section1'>
            <p>Saludos { nombre }! Nos alegra verte por aqui, ¿Quisieras ser parte de esta increible comunidad y ayudarnos? </p>
            <p>Apoyanos con la comida y materiales para trabajos in situ.</p>
            
        </div>
    )
}

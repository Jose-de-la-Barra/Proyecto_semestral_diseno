import {useState} from 'react';

import './integrantes.css'

export default function Integrantes() {
   const getIntegrante = async()=>{
    const url = `https://hhergvfybhaifwh.form.io`;
    const resp = await fetch(url); 
   }

   getIntegrante();
    return (
        <div>
            <h1 className='text-center titulo'>
                Integrantes
            </h1>


        </div>
    );
}
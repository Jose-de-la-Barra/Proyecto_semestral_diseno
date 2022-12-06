
import {React,useState}from 'react';
import {Form} from '@formio/react';

import 'formiojs/dist/formio.builder.min.css'

export default function Inscripciones() {
    const [result,setResult]=useState(null);
    const [submitted,setSubmitted ]= useState(false);
    const onSumbitHandler=(submission)=>{
        setResult(submission);
        setSubmitted(true);
    };
    const handleSubmit=(data)=>{
        console.log(data);
      }

    
    
    return (
        <div style={{maxWidth: '400px', margin: '50px'}}>
        <h3>Inscripciones Trabajos Voluntarios Verano 2022</h3>
        <Form form={'https://hhergvfybhaifwh.form.io/inscripciones'} onSubmit={handleSubmit}/>
        </div>

    );

    
}


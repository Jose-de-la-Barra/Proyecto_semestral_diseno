
import {React,useState}from 'react';
import {Form} from '@formio/react';

import 'formiojs/dist/formio.builder.min.css'

export default function Inscripciones() {
    const [result,setResult]=useState(null);
    const [submitted,setSubmitted ]= useState(false);
    const onSumbitHandler=(submission)=>{
        setResult(submission);
        setSubmitted(true);
    }
    

    return (
      <div>
        <h2>Gracias por Inscribirte a Trabajos Voluntarios UAI</h2>
        {
            !submitted ?
            <>
            <Form form={'https://hhergvfybhaifwh.form.io/inscripciones'} onSubmit={onSumbitHandler}/>
            </>
        :
        <>
            <div>
                <div>
                    <h4>Gracias!</h4>
                    <h5>{result?.data.name}</h5>
                    <h5>{result?.data.email}</h5>
                </div>
            </div>
        </>
        }

        
      </div>
    );
  
}


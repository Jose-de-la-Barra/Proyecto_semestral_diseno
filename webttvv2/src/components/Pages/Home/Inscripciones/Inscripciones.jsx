
import React from 'react';
import {Form} from '@formio/react';

import 'formiojs/dist/formio.builder.min.css'

class Inscripciones extends React.Component {

  handleSubmit(data) {
    console.log(data);
  }

  render() {
    return (
      <div style={{maxWidth: '400px', margin: '50px'}}>
        <Form form={'https://hhergvfybhaifwh.form.io/inscripciones'} onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default Inscripciones;
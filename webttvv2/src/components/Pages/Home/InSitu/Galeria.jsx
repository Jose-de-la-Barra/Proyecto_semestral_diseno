import React, {useState,useEffect} from 'react';

//import data from './api_imagenes';
import CloseButton from 'react-bootstrap/CloseButton';

import Img1 from './resources/Img1.jpeg';
import Img2 from './resources/Img2.jpeg';
import Img3 from './resources/Img3.jpeg';
import Img4 from './resources/Img4.jpeg';
import Img5 from './resources/Img5.jpeg';
import Img6 from './resources/Img6.jpeg';
import Img7 from './resources/Img7.jpeg';
import Img8 from './resources/Img8.jpeg';
import Img9 from './resources/Img9.jpeg';
import Img10 from './resources/Img10.jpeg';
import Img11 from './resources/Img11.jpeg';
import Img12 from './resources/Img12.jpeg';
import Img13 from './resources/Img13.jpeg';
import Img14 from './resources/Img14.jpeg';

import { MDBIcon } from 'mdb-react-ui-kit';
export default function Galeria() {

    let data = [
        {
            id : 1 ,
            imgSrc:Img1,
        },
        {
            id : 2 ,
            imgSrc:Img2,
        },
        {
            id : 3 ,
            imgSrc:Img3,
        },
        {
            id : 4 ,
            imgSrc:Img4,
        },
        {
            id : 5 ,
            imgSrc:Img5,
        },
        {
            id : 6 ,
            imgSrc:Img6,
        },
        {
            id : 7 ,
            imgSrc:Img7,
        },
        {
            id : 8 ,
            imgSrc:Img8,
        },
        {
            id : 9 ,
            imgSrc:Img9,
        },
        {
            id : 10 ,
            imgSrc:Img10,
        },
        {
            id : 11 ,
            imgSrc:Img11,
        },
        {
            id : 12 ,
            imgSrc:Img12,
        },
        {
            id : 13 ,
            imgSrc:Img13,
        },
        {
            id : 14 ,
            imgSrc:Img14,
        }
    ]
    
    const[model, setModel]= useState(false);
    const [TempImgSrc,setTempImgSrc]= useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    


    
    
    return (
        <div id='SobreNosotros'>
            <div className='Home-section1'>
                <h1 className='text-center titulo'>
                    Galeria
                </h1>
                    <p>Te presentamos la galeria, un lugar donde guardamos nuestros más preciados recuerdos.</p>
            </div>
            <div className={model? "model open" : "model"}>
                <img src={TempImgSrc}/>
                <CloseButton variant="white"  onClick = {()=> setModel(false)}/>
            </div>
            <div className='Galeria'>
                {data.map((item, index)=>{
                    return(
                        <div className='Imagenes' key={index} onClick={() => getImg(item.imgSrc)}> 
                            <img src={item.imgSrc} style={{width:'100%',borderRadius:'1rem'}}/>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

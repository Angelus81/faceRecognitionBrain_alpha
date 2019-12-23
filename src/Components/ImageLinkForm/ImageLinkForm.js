import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
       <div>
       <p className='f3'>
       {'This magic brain will detect faces in your pictures. Give it a try'}  
       </p>
        <div className='center'>
        <div className='form center pa4 br3 shadow-5'>        
            <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
            <button 
            className='w-30 grow f4 link ph3 pv2 dib black bg-light-purple'
            onClick={onButtonSubmit} 
            >Detect</button>
         </div>
        </div>
       </div>
    );
}

export default ImageLinkForm;

/*CSS Tachyons
w-30/70 - width
ph3 - padding horizontal 3
pv2 - padding vertical 2
dib - display:inline-block
ma4 - margin
br4 - border radius of 4
mt0 - margin top to 0
pa4 - padding of 4
f3 - font-size: 1.5rem;
link - opens new page
dim - dims when mouse over
black - color
underline - underline
pa3 - padding of 3
pointer - mouse pointer*/
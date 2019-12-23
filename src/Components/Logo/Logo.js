import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
    return (
       <div className='ma4 mt0'>
        <Tilt className="Tilt br4 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }}>
         <div className="Tilt-inner pa4 pointer"><img style={{paddingTop: '7px'}} alt='logo' src={brain}/></div>
        </Tilt>
       </div>
    );
}

export default Logo;

/*CSS Tachyons
ma4 - margin
br4 - border of 4
mt0 - margin top to 0
pa4 - padding of 4
f3 - font-size: 1.5rem;
link - opens new page
dim - dims when mouse over
black - color
underline - underline
pa3 - padding of 3
pointer - mouse pointer*/
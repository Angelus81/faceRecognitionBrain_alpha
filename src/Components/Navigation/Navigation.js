import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
          return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Log Out</p>
        </nav>
        );
        } else {
          return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
        );
    }
}

export default Navigation;

/*CSS Tachyons
f3 - font-size: 1.5rem;
link - opens new page
dim - dims when mouse over
black - color
underline - underline
pa3 - paddinfg of 3
pointer - mouse pointer*/


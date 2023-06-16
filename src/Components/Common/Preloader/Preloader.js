import React from 'react';
import preloader from '../../Assets/Image/prel.svg';

let Preloader = (props) => {
    return <div>
        <img src={preloader} alt='' width={60} height={60} />
    </div>
}

export default Preloader;
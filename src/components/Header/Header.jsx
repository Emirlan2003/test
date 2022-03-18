import React from 'react';
import { sendMetric } from '../../GoogleAnalitics';
import './Header.css'

const Header = () => {


    const funcMetric = () => { sendMetric('click', 'ClickOnMainPage') }

    return (
        <div className='header'
             onClick={funcMetric}>
            <div>
                Home
            </div>
            <div>
                Bio
            </div>
            <div>
                Login
            </div>
            <div>
                Tasks
            </div>
        </div>
    );
};

export default Header;
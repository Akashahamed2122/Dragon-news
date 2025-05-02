import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Zone from './Zone';

const RightAside = () => {
    return (
        <div>
           
            <SocialLogin></SocialLogin>
            <div className='mt-5'>
                <FindUs></FindUs>
            </div>
            <div>
                <Zone></Zone>
            </div>
        </div>
    );
};

export default RightAside;
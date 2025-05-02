import React from 'react';
import swmmingImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playImg from '../../assets/playground.png'

const Zone = () => {
    return (
        <div className='bg-base-200 p-3 mt-5'>
            <h1 className='font-bold'>Q- zone</h1>
            <div>
                <img className='w-full' src={swmmingImg} alt="" />
                <img className='w-full' src={classImg} alt="" />
                <img className='w-full' src={playImg} alt="" />
            </div>
        </div>
    );
};

export default Zone;
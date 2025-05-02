import React from 'react';
import Marquee from 'react-fast-marquee';

const LatesNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-4'>
            <h1 className='text-base-100 bg-secondary px-8 py-4'> news</h1>
            <Marquee speed={60} pauseOnHover={true} className=''>Lorem ipsum dolor sit amet, consectetur que? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione impedit eveniet a possimus soluta adipisci consequatur quo deleniti nam. Iusto. </Marquee>
          
        </div>
    );
};

export default LatesNews;